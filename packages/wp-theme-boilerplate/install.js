const prompts = require("prompts");
const fs = require("fs");
const path = require("path");
const pathExists = require("path-exists");
const figlet = require("figlet");
const chalk = require("chalk");
const replace = require("replace-in-file");
var ncp = require("ncp").ncp;

// method for filtering hidden files (.dot. DStore, .git)
const isUnixHiddenPath = path => /(^|\/)\.[^\/\.]/g.test(path);

const ROOT_PATH = path.join(__dirname);
const INSTALL_SRC_PATH = path.join(ROOT_PATH, `./install-src/acf-json`);
console.log("INSTALL_SRC_PATH:", INSTALL_SRC_PATH);

// default values for i18n domain & php classes namespace
const DEFAULT_THEME_DOMAIN = "mill3wp";
const DEFAULT_THEME_NAMESPACE = "Mill3WP";

let cancelled = false;

let settings = {
  INSTALL_PATH: ROOT_PATH,
  THEME_DOMAIN: DEFAULT_THEME_DOMAIN,
  THEME_NAMESPACE: DEFAULT_THEME_NAMESPACE
};

// intro message
console.log(
  chalk.blue("************************************************************")
);
console.log(chalk.blue(figlet.textSync("MILL3", { horizontalLayout: "full" })));
console.log(
  chalk.blue("************************************************************")
);

(async () => {
  const questions = [
    {
      type: "text",
      name: "INSTALL_PATH",
      message:
        "Install path for theme (must be relative, defaults to current directory) :",
      initial: ROOT_PATH,
      format: val => {
        return val !== ROOT_PATH ? path.join(ROOT_PATH, val) : val;
      },
      validate: async text => {
        return (await pathExists(text))
          ? true
          : `The relative path '${text}' doesn't existing`;
      }
    },
    {
      type: "text",
      name: "THEME_DOMAIN",
      message: "Theme domain for i18n strings :"
    },
    {
      type: "text",
      name: "THEME_NAMESPACE",
      message: "Namespace for PHP classes :"
    }
  ];

  const onSubmit = (prompt, answer) => {
    answer.length ? (settings[prompt.name] = answer) : null;

    // copy all files
    // install(settings)
  };

  const onCancel = prompt => {
    console.log(chalk.red("✖ Abort Abort !"));
    cancelled = true;
    return false;
  };

  const response = await prompts(questions, { onSubmit, onCancel });

  // stop here if canceled
  if (cancelled) return;

  console.log(
    chalk.blue(
      `Done with questions, installing in directory ${settings["INSTALL_PATH"]}`
    )
  );

  await install();

  console.log(chalk.blue(`Installation done!`));
})();

//
const install = async () => {
  // console.log(settings);

  ncp(INSTALL_SRC_PATH, settings["INSTALL_PATH"], function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("done!");
    // return true;
  });

  return true;
};

// (async () => {
//   const response = await prompts();

//   settings.INSTALL_PATH = response.INSTALL_PATH;

//   console.log(settings);

// })();
