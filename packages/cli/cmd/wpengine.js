#!/usr/bin/env node
const util = require("util");
const fetch = require('node-fetch');
// const exec = util.promisify(require("child_process").exec);
const prompts = require("prompts");
const path = require("path");
const figlet = require("figlet");
const chalk = require("chalk");
const { program } = require("commander");
const { options } = require("args");

const WPENGINE_ACCOUNT_ID = process.env.WPENGINE_API_ACCOUNT_ID;
const WPENGINE_USER_ID = process.env.WPENGINE_API_USER;
const WPENGINE_PASSWORD = process.env.WPENGINE_API_PASSWORD;
const WPENGINE_API_BASE = `https://api.wpengineapi.com/v1`;

// get global settings from bootstrap command
let { BOOTSTRAP_SETTINGS } = require(`./bootstrap`);

// holder when user is cancel Prompts
let cancelled = false;

let settings = {
  'INSTALL_TYPE': null,
  'WPENGINE_SITENAME': null,
  'WPENGINE_SITE_ID': null,
  'WPENGINE_INSTALL_NAME': null,
  'WPENGINE_INSTALL_ID': null,
  'WPENGINE_INSTALL_ENV': null,
  'WPENGINE_DOMAIN_NAME': null,
};

// start Prompts
const run = async () => {
  const options = program.opts();

  // First Intro message
  console.log(chalk.blue(figlet.textSync("WPENGINE", { horizontalLayout: "full" })));

  if(!WPENGINE_ACCOUNT_ID || !WPENGINE_USER_ID || !WPENGINE_PASSWORD) {
    console.log(chalk.red(`WPENGINE script cant continue.\nCredentials WPENGINE_ACCOUNT_ID, WPENGINE_USER_ID & WPENGINE_PASSWORD not found in your process env.\nExport those to your bash session before running this script.`));
    return;
  }

  // get all sites from WPENGINE
  const sites = await wpengineSites();

  const questions = [
    {
      type: 'select',
      name: "INSTALL_TYPE",
      message: `Do you want to create or select a WPEngine site ?`,
      initial: false,
      choices: [
        { title: 'Skip', value: null },
        { title: 'Create new site', value: 'new' },
        { title: 'Select', value: 'select' }
      ]
    },
    {
      type: prev => {
        if(!prev) return null
        if(prev == 'new') return 'text'
        if(prev == 'select') return 'select'
      },
      name: prev => prev == 'select' ? "WPENGINE_SITE_ID" : "WPENGINE_SITENAME",
      message: prev => prev == false ? 'In which site ?' : 'Type site name',
      initial: null,
      choices: sites.results.map((site) => {
        return {
          title: site.name,
          value: site.id
        }
      })
    },
    {
      type: prev => prev != 'skip' ? "text" : null,
      name: "WPENGINE_INSTALL_NAME",
      message: `WPEngine installation name (slug format, less than 14 chars) :`,
      validate: text => {
        return /^[A-Za-z0-9]+(?:[A-Za-z0-9]+)*$/.test(text) && text.length <= 14 ? true : "In slug-format only, no dash or underlines.";
      }
    },
    {
      type: prev => prev !== null ? "select" : null,
      name: "WPENGINE_INSTALL_ENV",
      message: `Select a WPEngine environment `,
      initial: false,
      choices: [
        { title: 'Production', value: 'production' },
        { title: 'Staging', value: 'staging' },
        { title: 'Development', value: 'dev' },
      ]
    },
    // {
    //   type: 'text',
    //   name: "WPENGINE_DOMAIN_NAME",
    //   message: `WPEngine primary domain name :`,
    //   validate: text => {
    //     return /^[A-Za-z0-9]+(?:[.-][A-Za-z0-9]+)*$/.test(text) ? true : "In slug-format only, no underlines.";
    //   }
    // }
  ];

  const onSubmit = (prompt, answer) => {
    // merge each answer to settings
    answer.length ? (settings[prompt.name] = answer) : null;
  };

  const onCancel = prompt => {
    console.log(chalk.red("✖ Abort Abort Abort !"));
    cancelled = true;
    return false;
  };

  await prompts(questions, { onSubmit, onCancel });

  // console.log(settings);
  if (cancelled) return;

  // stop here if INSTALL_TYPE is null
  if(!settings['INSTALL_TYPE']) return { options, settings };

    // create WPEngine site
  if (settings['WPENGINE_SITENAME']) {

    console.log(chalk.whiteBright(`✔ Creating new WPENGINE site`));

    const siteResponse = await wpengineSite();

    if(siteResponse.errors) {
      console.log(chalk.red('*** WPENGINE Site Error ***'));
      console.log(chalk.red(siteResponse.errors[0].message));
      return;
    } else {
      settings['WPENGINE_SITE_ID'] = siteResponse.id
    }

    // sleep
    console.log(chalk.whiteBright(`✔ Sleeping for 5 sec while WPENGINE creates permission the new site...`));
    await new Promise(r => setTimeout(r, 5000));
    console.log(chalk.whiteBright(`✔ Done sleeping !`));
  }

  // create WPEngine install
  if(settings['WPENGINE_SITE_ID']) {

    console.log(chalk.whiteBright(`✔ Creating new WPENGINE install`));

    const installResponse = await wpengineInstall();

    if(installResponse.errors) {
      console.log(chalk.red('*** WPENGINE Install Error ***'));
      console.log(chalk.red(installResponse.errors[0].message));
      return;
    } else {
      settings['WPENGINE_INSTALL_ID'] = installResponse.id
    }

    // sleep
    // console.log(chalk.whiteBright(`✔ Sleeping for 5 sec while WPENGINE creates permission the new installation...`));
    // await new Promise(r => setTimeout(r, 5000));
    // console.log(chalk.whiteBright(`✔ Done sleeping !`));
  }

  // attach WPEngine domain
  // if(settings['WPENGINE_DOMAIN_NAME']) {
  //   const domaineResponse = await wpengineDomain();

  //   if(domaineResponse.errors) {
  //     console.log(chalk.red('*** WPENGINE Domain Error ***'));
  //     console.log(chalk.red(domaineResponse.errors[0].message));
  //     return;
  //   } else {
  //     settings['WPENGINE_DOMAIN_ID'] = domaineResponse.id
  //   }
  // }

  // merge settings to global BOOTSTRAP_SETTINGS
  BOOTSTRAP_SETTINGS['wpengine'] = settings;

  // return true to promise
  return true;
};


const wpengineSite = async () => {
  return await fetch(`${WPENGINE_API_BASE}/sites`,
    {
      method: 'POST',
      body: JSON.stringify(
        {
          name: settings['WPENGINE_SITENAME'],
          account_id: WPENGINE_ACCOUNT_ID
        }
      ),
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'authorization': wpengineAuth()
      }
    })
    .then(res => res.json())
    .then(json => {
      return json;
    });
}

const wpengineInstall = async () => {
  return await fetch(`${WPENGINE_API_BASE}/installs`,
    {
      method: 'POST',
      body: JSON.stringify(
        {
          'name': settings['WPENGINE_INSTALL_NAME'],
          'account_id': WPENGINE_ACCOUNT_ID,
          'site_id': settings['WPENGINE_SITE_ID'],
          'environment': settings['WPENGINE_INSTALL_ENV']
        }
      ),
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'authorization': wpengineAuth()
      }
    })
    .then(res => res.json())
    .then(json => {
      return json;
    });
}

const wpengineDomain = async () => {
  return await fetch(`${WPENGINE_API_BASE}/installs/${settings['WPENGINE_INSTALL_ID']}/domains`,
    {
      method: 'POST',
      body: JSON.stringify(
        {
          "name": settings['WPENGINE_DOMAIN_NAME'],
          "primary": true
        }
      ),
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'authorization': wpengineAuth()
      }
    })
    .then(res => res.json())
    .then(json => {
      return json;
    });
}

const wpengineSites = async () => {
  return await fetch(`${WPENGINE_API_BASE}/sites`,
    {
      method: 'GET',
      headers: { 'authorization': wpengineAuth() }
    })
    .then(res => res.json())
    .then(json => {
      return json;
    });
}

const wpengineAuth = () => "Basic " + Buffer.from(WPENGINE_USER_ID + ":" + WPENGINE_PASSWORD).toString('base64');

module.exports.run = run;

exports.module = run;
