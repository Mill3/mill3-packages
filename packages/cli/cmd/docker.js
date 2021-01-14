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

// holder when user is cancel Prompts
let cancelled = false;

const REPOSITORY_URL = "git@github.com:Mill3/wordpress-docker-boilerplate.git";

// defaults
let settings = {
  INSTALL_PATH: PROCESS_PATH,
};

// start Prompts
const run = async () => {
  // First Intro message
  console.log(chalk.blue("*****************************************************"));
  console.log(chalk.blue(figlet.textSync("MILL3", { horizontalLayout: "full" })));
  console.log(chalk.blue("*****************************************************"));

  const questions = [
    {
      type: "text",
      name: "INSTALL_PATH",
      message: `Install path for theme (must be relative, defaults to current directory) :`,
      initial: settings["INSTALL_PATH"],
      format: val => {
        return val !== settings["INSTALL_PATH"] ? path.join(PROCESS_PATH, val) : val;
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
  // await rename();

  console.log(chalk.blue(`\nInstallation done in ${settings["INSTALL_PATH"]}\n`));
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


run();

exports.module = run;
