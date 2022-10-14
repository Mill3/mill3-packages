#!/usr/bin/env node
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const prompts = require("prompts");
const path = require("path");
const figlet = require("figlet");
const chalk = require("chalk");

// get global settings from bootstrap command
let { BOOTSTRAP_SETTINGS } = require(`./bootstrap`);

// holder when user is cancel Prompts
let cancelled = false;

let settings = {
  'GITHUB_ORGANISATION': 'Mill3',
  'REPOSITORY_NAME': null,
  'CONFIRM': false,
};

// start Prompts
const run = async () => {

  // First Intro message
  console.log(chalk.blue(figlet.textSync("GIT", { horizontalLayout: "full" })));

  const questions = [
    {
      type: "toggle",
      name: "CONFIRM",
      message: `Do you want to create a Github repository?`,
      initial: false,
      active: "yes",
      inactive: "no"
    },
    {
      type: prev => prev == true ? 'text' : null,
      name: "REPOSITORY_NAME",
      message: `Github repository name (this should match your theme directory name if possible)`,
      initial: BOOTSTRAP_SETTINGS?.docker?.THEME_NAME,
      validate: text => {
        return /^[A-Za-z0-9]+(?:[-_][A-Za-z0-9]+)*$/.test(text) ? true : "In slug-format only.";
      }
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
  if (!response['CONFIRM']) return;

  // stop here if canceled
  if (cancelled) return;

  // run Github `gh` cli command
  await github();

  // init git in installation directory
  await git();

  // merge settings to global BOOTSTRAP_SETTINGS
  BOOTSTRAP_SETTINGS['repository'] = settings

  return true;
};

const github = async () => {

  try {
    console.log(chalk.green(`Creating a Github repository named ${settings["GITHUB_ORGANISATION"]}/${settings["REPOSITORY_NAME"]}`));

    // clone repos
    const { error, stdout, stderr } = await exec(`gh repo create --private ${settings["GITHUB_ORGANISATION"]}/${settings["REPOSITORY_NAME"]} --private`);
    if (error) {
      throw error;
    }

  } catch (err) {
    // display Git error
    console.error(err);
    // make sure we exit process if Git has failed
    process.exit(1);
  }
};

const git = async () => {
  try {
    // stop here if global setting doesn't have an install path
    if(!BOOTSTRAP_SETTINGS?.docker?.INSTALL_PATH) return;

    // get install path
    const install_path  = BOOTSTRAP_SETTINGS["docker"]["INSTALL_PATH"];

    console.log(chalk.green(`Init git in directory ${install_path}`));

    // git chain of commands
    const commands = [
      `cd ${install_path}`,
      `git init && git add * ./`,
      `git branch -M master`,
      `git commit -am "added all files"`,
      `git remote add origin git@github.com:${settings["GITHUB_ORGANISATION"]}/${settings["REPOSITORY_NAME"]}.git`,
      `git push -u origin master`
    ]

    // run git commands
    const { error, stdout, stderr } = await exec(commands.join(" && "));

    // send to console git output
    // console.log(stdout);

    if (error) {
      throw error;
    }

  } catch (err) {
    // display Git error
    console.error(err);
    // make sure we exit process if Git has failed
    process.exit(1);
  }
};

module.exports.run = run;

exports.module = run;
