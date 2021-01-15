#!/usr/bin/env node
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const prompts = require("prompts");
const fse = require("fs-extra");
const path = require("path");
const figlet = require("figlet");
const chalk = require("chalk");
const replace = require("replace-in-file");
const { features } = require("process");
const { program } = require("commander");
const { options } = require("args");

const PROCESS_PATH = path.join(process.cwd());

// holder when user is cancel Prompts
let cancelled = false;

const REPOSITORY_URL = "git@github.com:Mill3/wordpress-docker-boilerplate.git";
const DEFAULT_DOCKER_PORT_WEB = 8000;
const DEFAULT_DOCKER_PORT_PHPMYADMIN = 8001;
const DEFAULT_DOCKER_MASTER_PATH = "/Users/myuser/wp-install-root/";
const DEFAULT_THEME_NAME = "mytheme";

// defaults
let settings = {
  REPOSITORY_URL: REPOSITORY_URL,
  DOCKER_PORT_WEB: DEFAULT_DOCKER_PORT_WEB,
  DOCKER_PORT_PHPMYADMIN: DEFAULT_DOCKER_PORT_PHPMYADMIN,
  INSTALL_PATH: PROCESS_PATH,
  THEME_NAME: DEFAULT_THEME_NAME
};

// start Prompts
const run = async () => {
  const options = program.opts();

  if (options.repository) {
    settings["REPOSITORY_URL"] = options.repository;
  }

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
      type: "text",
      name: "DOCKER_PORT_WEB",
      initial: settings["DOCKER_PORT_WEB"],
      message: "On what port should your Docker web service run ?",
      validate: text => {
        return /[0-9]/.test(text) ? true : "Only numbers.";
      }
    },
    {
      type: "text",
      name: "DOCKER_PORT_PHPMYADMIN",
      initial: settings["DOCKER_PORT_PHPMYADMIN"],
      message: "On what port should your PhpMyAdmin service run ?",
      validate: text => {
        return /[0-9]/.test(text) ? true : "Only numbers.";
      }
    },
    {
      type: "text",
      name: "THEME_NAME",
      initial: settings["THEME_NAME"],
      message: "What is your theme directory name (my-theme, my-project-theme-directory, my_super_theme) ?",
      validate: text => {
        return /^[A-Za-z0-9]+(?:[-_][A-Za-z0-9]+)*$/.test(text) ? true : "In slug-format only.";
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
  await install(options);

  // rename to new namespace
  await rename(options);

  console.log(chalk.blue(`\nInstallation done in ${settings["INSTALL_PATH"]}\n`));
};

// clone and cleanup files
const install = async options => {
  try {
    console.log(chalk.green(`Step 1 : cloning repository in directory ${settings["INSTALL_PATH"]}`));

    // clone repos
    const { error, stdout, stderr } = await exec(`git clone ${settings["REPOSITORY_URL"]} ${settings["INSTALL_PATH"]}`);
    if (error) {
      throw error;
    } else {
      console.log(chalk.green(`Step 2 : repo cloning done.`));
    }

    // remove git directory if specified
    if (!options.keepgit) await fse.remove(`${settings["INSTALL_PATH"]}/.git`);

    // rename .env
    await fse.copy(`${settings["INSTALL_PATH"]}/.env.sample`, `${settings["INSTALL_PATH"]}/.env`, { overwrite: false });
  } catch (err) {
    // display Git error
    console.error(err);
    // make sure we exit process if Git has failed
    process.exit(1);
  }
};

const rename = async () => {
  // regex for domain and namespace
  var reDockerWeb = new RegExp(DEFAULT_DOCKER_PORT_WEB, "g");
  var reDockerPhpMyAdmin = new RegExp(DEFAULT_DOCKER_PORT_PHPMYADMIN, "g");
  var reDockerMasterPath = new RegExp(DEFAULT_DOCKER_MASTER_PATH, "g");
  var reDockerThemeName = new RegExp(DEFAULT_THEME_NAME, "g");

  // replace options
  const options = {
    files: [`${settings["INSTALL_PATH"]}/.env`],
    ignore: ["node_modules/**"],
    from: [reDockerWeb, reDockerPhpMyAdmin, reDockerMasterPath, reDockerThemeName],
    to: [
      settings["DOCKER_PORT_WEB"],
      settings["DOCKER_PORT_PHPMYADMIN"],
      settings["INSTALL_PATH"],
      settings["THEME_NAME"]
    ],
    countMatches: true
  };

  try {
    await replace(options);
    console.log(chalk.green("Step 3/3 : renamed all files."));
  } catch (err) {
    console.error(err);
  }
};

run();

exports.module = run;
