#!/usr/bin/env node
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const prompts = require("prompts");
const fse = require("fs-extra");
const path = require("path");
const figlet = require("figlet");
const chalk = require("chalk");
const replace = require("replace-in-file");
const { features } = require("process");

const PROCESS_PATH = path.join(process.cwd());

// get global settings from bootstrap command
let { BOOTSTRAP_SETTINGS } = require(`./bootstrap`);

// holder when user is cancel Prompts
let cancelled = false;

// current values for i18n domain & php classes namespace
const DEFAULT_THEME_DOMAIN = "mill3wp";
const DEFAULT_THEME_NAMESPACE = "Mill3WP";
const DEFAULT_THEME_NAME = "mill3-wp-theme-boilerplate";
const REPOSITORY_URL = "git@github.com:Mill3/mill3-wp-theme-boilerplate.git";

// defaults
let settings = {
  INSTALL_PATH: PROCESS_PATH,
  THEME_DOMAIN: DEFAULT_THEME_DOMAIN,
  THEME_NAMESPACE: DEFAULT_THEME_NAMESPACE,
  THEME_NAME: DEFAULT_THEME_NAME
};

// start Prompts
const run = async () => {
  // First Intro message
  console.log(chalk.blue(figlet.textSync("THEME", { horizontalLayout: "full" })));

  // suggest install path if BOOTSTRAP_SETTINGS['docker'] values exists
  if(BOOTSTRAP_SETTINGS?.docker?.INSTALL_PATH) settings['INSTALL_PATH'] = `${BOOTSTRAP_SETTINGS.docker.INSTALL_PATH}/wp-content/themes/${BOOTSTRAP_SETTINGS.docker.THEME_NAME}`
  if(BOOTSTRAP_SETTINGS?.docker?.THEME_NAME) settings['THEME_NAME'] = BOOTSTRAP_SETTINGS.docker.THEME_NAME;

  const questions = [
    {
      type: "text",
      name: "INSTALL_PATH",
      message: "Install path for theme (must be relative, defaults to current directory) :",
      initial: settings["INSTALL_PATH"],
      format: val => {
        return val !== settings["INSTALL_PATH"] ? path.join(PROCESS_PATH, val) : val;
      }
    },
    {
      type: "text",
      name: "THEME_DOMAIN",
      initial: settings["THEME_DOMAIN"],
      message: "Theme domain for i18n strings :",
      validate: text => {
        return /^\S*$/.test(text) ? true : "No spaces allowed.";
      }
    },
    {
      type: "text",
      name: "THEME_NAMESPACE",
      initial: settings["THEME_NAMESPACE"],
      message: "Namespace for PHP classes :",
      validate: text => {
        return /[A-Z]/.test(text) ? true : "Please use CamelCase style";
      }
    },
    {
      type: "toggle",
      name: "confirm",
      message: `Are you sure? This will overwrite any same exiting file in target directory !`,
      initial: false,
      active: "yes",
      inactive: "no"
    }
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

  const response = await prompts(questions, { onSubmit, onCancel });

  // stop here if did not confirm
  if (!response.confirm) return;

  // stop here if canceled
  if (cancelled) return;

  console.log(chalk.blue(`\nDone with questions, starting installation in directory ${settings["INSTALL_PATH"]}\n`));

  // install all files
  await install();

  // rename to new namespace
  await rename();

  console.log(chalk.blue(`\nInstallation done in ${settings["INSTALL_PATH"]}\n`));

  // merge settings to global BOOTSTRAP_SETTINGS
  BOOTSTRAP_SETTINGS['theme'] = settings

  return true;
};

// clone and cleanup files
const install = async () => {
  try {
    console.log(chalk.green(`Step 1 : cloning repository in directory ${settings["INSTALL_PATH"]}`));
    await clone();
    await fse.remove(`${settings["INSTALL_PATH"]}/.git`);
    await fse.move(`${settings["INSTALL_PATH"]}/.env.sample`, `${settings["INSTALL_PATH"]}/.env`, { overwrite: true });
  } catch (err) {
    // display Git error
    console.error(err);
    // make sure we exit process if Git has failed
    process.exit(1);
  }
};

const clone = async () => {
  const { error, stdout, stderr } = await exec(`git clone ${REPOSITORY_URL} ${settings["INSTALL_PATH"]}`);
  if (error) {
    throw error;
  } else {
    console.log(chalk.green(`Step 2 : repo cloning done.`));
  }
}

const rename = async () => {
  // regex for domain and namespace
  var reDomain = new RegExp(DEFAULT_THEME_DOMAIN, "g");
  var reNamespace = new RegExp(DEFAULT_THEME_NAMESPACE, "g");
  var reThemename = new RegExp(DEFAULT_THEME_NAME, "g");

  // replace options
  const options = {
    files: [
      `${settings["INSTALL_PATH"]}/**/*.php`,
      `${settings["INSTALL_PATH"]}/**/*.js`,
      `${settings["INSTALL_PATH"]}/**/*.json`
    ],
    ignore: ["node_modules/**"],
    from: [reDomain, reNamespace, reThemename],
    to: [settings["THEME_DOMAIN"], settings["THEME_NAMESPACE"], settings["THEME_NAME"]],
    countMatches: true
  };

  try {
    await replace(options);
    console.log(chalk.green("Step 3/3 : renamed all files."));
  } catch (err) {
    console.error(err);
  }
};

// run();
module.exports.run = run;

exports.module = run;
