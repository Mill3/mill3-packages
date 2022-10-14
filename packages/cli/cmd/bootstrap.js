const figlet = require("figlet");
const chalk = require("chalk");

let BOOTSTRAP_SETTINGS = {
  wpengine: null,
  docker: null,
  theme: null,
  repository: null
}

const run = async () => {
  // INTRO MESSSAGE
  console.log(chalk.greenBright(figlet.textSync("Mill3 CLI - BOOTSTRAP", { horizontalLayout: "full" })));

  // import all run() engines
  const run_wpengine = require('./wpengine').run;
  const run_docker = require('./docker').run;
  const run_theme = require('./theme').run;
  const run_repository = require('./repository').run;

  // run wpengine
  await run_wpengine();

  // first install docker
  await run_docker();

  // send saved settings to theme install process
  await run_theme();

  // create repository and git init
  await run_repository();
}

// exports.BOOTSTRAP_SETTINGS = BOOTSTRAP_SETTINGS;

exports.BOOTSTRAP_SETTINGS = BOOTSTRAP_SETTINGS;
exports.run = run;
// module.exports.run = run;
