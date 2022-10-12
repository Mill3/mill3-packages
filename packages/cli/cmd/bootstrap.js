const run_docker = require('./docker').run;
const run_theme = require('./theme').run;

const run = async () => {
  // first install docker
  const docker = await run_docker();

  // get settings from docker install process
  const { INSTALL_PATH, THEME_NAME } = docker.settings

  // send saved settings to theme install process
  const theme = await run_theme(`${INSTALL_PATH}/wp-content/themes/${THEME_NAME}`);
}

module.exports.run = run;

exports.module = run;
