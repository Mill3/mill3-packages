const prompts = require("prompts");
// const fs = require("fs");
const fs = require("fs-extra");
const path = require("path");
const pathExists = require("path-exists");
const figlet = require("figlet");
const chalk = require("chalk");
const replace = require("replace-in-file");

// method for filtering hidden files (.dot. DStore, .git)
// const isUnixHiddenPath = path => /(^|\/)\.[^\/\.]/g.test(path);

const ROOT_PATH = path.join(__dirname);
const INSTALL_SRC_PATH = path.join(ROOT_PATH, `./install-src/`);
// console.log("INSTALL_SRC_PATH:", INSTALL_SRC_PATH);

// default values for i18n domain & php classes namespace
const DEFAULT_THEME_DOMAIN = "mill3wp";
const DEFAULT_THEME_NAMESPACE = "Mill3WP";

let cancelled = false;

let settings = {
  INSTALL_PATH: path.join(ROOT_PATH, "test-install-dir"),
  THEME_DOMAIN: DEFAULT_THEME_DOMAIN,
  THEME_NAMESPACE: DEFAULT_THEME_NAMESPACE
};

console.log("settings:", settings);

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
      initial: settings["INSTALL_PATH"],
      format: val => {
        return val !== settings["INSTALL_PATH"]
          ? path.join(ROOT_PATH, val)
          : val;
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
      initial: settings["THEME_DOMAIN"],
      message: "Theme domain for i18n strings :"
    },
    {
      type: "text",
      name: "THEME_NAMESPACE",
      initial: settings["THEME_NAMESPACE"],
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
  await rename();

  console.log(chalk.blue(`Installation done!`));
})();

// install all files
const install = async () => {
  try {
    await fs.copy(INSTALL_SRC_PATH, settings["INSTALL_PATH"]);
    console.log("Success, copied all files!");
  } catch (err) {
    console.error(err);
  }

  // ncp(INSTALL_SRC_PATH, settings["INSTALL_PATH"], (err) => {
  //   if (err) {
  //     return console.error(err);
  //   }
  //   // console.log("done!");
  //   // return true;

  //   // start renaming all
  //   // await rename();
  //   // const results = await rename()
  //   // console.log('Replacement results:', results);

  //   return true;
  // });
};

const rename = async () => {
  // regex
  var reDomain = new RegExp(DEFAULT_THEME_DOMAIN, "g");
  var reNamespace = new RegExp(DEFAULT_THEME_NAMESPACE, "g");

  // replace options
  const options = {
    files: [
      `${settings["INSTALL_PATH"]}/**/*.php`,
      `${settings["INSTALL_PATH"]}/**/*.js`
    ],
    ignore: ["install-src/**", "node_modules/**"],
    from: [reDomain, reNamespace],
    to: [settings["THEME_DOMAIN"], settings["THEME_NAMESPACE"]],
    // dry: true,
    countMatches: true
  };

  try {
    await replace(options);
    console.log("Success, renamed all files");
  } catch (err) {
    console.error(err);
  }

  // // replace all files with new ThemeDomain and PHP Namespace
  // await replace(options)
  //   .then(changes => {
  //     console.log(`Scanned ${changes.length} file(s)!`);
  //   })
  //   .catch(error => {
  //     console.error("Error occurred:", error);
  //   });
};
