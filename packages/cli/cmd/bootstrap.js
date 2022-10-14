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

  const wpengine_sitename = BOOTSTRAP_SETTINGS?.docker?.WPENGINE_SITENAME;

  if(!wpengine_sitename) return;

  // out message and todo list remaining
  console.log(chalk.green(`\n\nAll done for now, last steps remaining :\n`));
  console.log(chalk.green(`□ Add CNAME entry ${wpengine_sitename}.mill3.dev https://dash.cloudflare.com/5d4816a7293bf7a178dc578d77d72867/mill3.dev/dns `));
  console.log(chalk.green(`□ Add ${wpengine_sitename}.mill3.dev in WPEngine https://my.wpengine.com/installs/${wpengine_sitename}/domain_add/new`));
  console.log(chalk.green(`□ Generate WPENGINE SSL for new domain ${wpengine_sitename}.mill3.dev`));
  console.log(chalk.green(`□ Enable domain security in CloudFlare Zero Trust https://dash.teams.cloudflare.com/5d4816a7293bf7a178dc578d77d72867/access/apps `));
  console.log(chalk.green(`□ Create sentry.io projects : 'js-${wpengine_sitename}' & 'php-${wpengine_sitename}' https://sentry.io/organizations/mill3-studio/projects/`));
  console.log(chalk.green(`□ ssh connect to WPEngine : 'ssh ${wpengine_sitename}@${wpengine_sitename}.ssh.wpengine.net'`));
  console.log(chalk.green(`□ Add extra config in wp-config.php from https://gist.github.com/thetoine/59b90835e99663c81536d519d6b539c9'`));
  console.log(chalk.green(`□ Install plugins with 'wp mill3wp plugins'`));
  console.log(chalk.green(`□ Invite Mill3 admin with 'wp mill3wp create_admins'`));
  console.log(chalk.green(`□ Connect to in https://${wpengine_sitename}.mill3.dev/wp-admin`));
  console.log(chalk.green(`□ Import ACF fields`));
  console.log(chalk.green(`□ Enable DB Migrate Pro`));
  console.log(chalk.green(`\n🦅 ENJOY\n`));
}

exports.BOOTSTRAP_SETTINGS = BOOTSTRAP_SETTINGS;
exports.run = run;
