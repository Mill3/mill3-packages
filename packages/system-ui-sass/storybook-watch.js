// storybook-watch.js
const fs = require("fs");
const path = require("path");
const cp = require("child_process");
const chalk = require("chalk");


const theme = path.resolve("theme.js");
const theme_es6 = path.resolve("copy-theme-to-es6.js");

const css_build = path.resolve("build.js");
const css_src = path.join(__dirname, "./src");


// https://stackoverflow.com/a/22649812/519240
const runScript = (scriptPath, callback) => {
  // keep track of whether callback has been invoked to prevent multiple invocations
  var invoked = false;
  var process = cp.fork(scriptPath);

  // listen for errors as they may prevent the exit event from firing
  process.on('error', function (err) {
      if (invoked) return;
      invoked = true;
      callback(err);
  });

  // execute the callback once the process has finished running
  process.on('exit', function (code) {
      if (invoked) return;
      invoked = true;
      var err = code === 0 ? null : new Error('exit code ' + code);
      callback(err);
  });
}


var theme_is_running = false;
var theme_rerun_on_completion = false;

const copy_theme_to_es6 = (callback) => {
  if( theme_is_running === true ) {
    theme_rerun_on_completion = true;
    return;
  }

  theme_rerun_on_completion = false;
  theme_is_running = true;

  runScript(theme_es6, (err) => {
    if( err ) {
      const message = `Unable to copy ${theme} to ES6: ${error}`;
      console.log(`${chalk.red(message)}`);
    }
    else console.log(`${chalk.green("Theme copied to ES6")}`);

    theme_is_running = false;

    if( theme_rerun_on_completion === true ) copy_theme_to_es6();
    else if( callback ) callback();
  });
}

var css_is_running = false;

const build_css = (callback) => {
  if( css_is_running === true ) return;
  css_is_running = true;

  runScript(css_build, (err) => {
    if( err ) {
      const message = `Error compiling css: ${error}`;
      console.log(`${chalk.red(message)}`);
    }

    css_is_running = false;
    if( callback ) callback();
  });
}



// watch theme.js and rebuild it to ES6 when it changes
fs.watchFile(theme, {interval: 1000}, () => {
  copy_theme_to_es6(() => {
    build_css();
  });
});
console.log(`${chalk.yellow("Watching " + theme)}`);


// watch ./src/ and rebuild css
fs.watch(css_src, { recursive: true }, () => build_css());
console.log(`${chalk.yellow("Watching " + css_src)}`);


// bootstrapping
copy_theme_to_es6(() => {
  build_css(() => {
    console.log(`${chalk.yellow("Starting Storybook...")}`);

    // start storybook dev server
    const storybook = cp.exec('start-storybook');
    storybook.stdout.on('data', (data) => { console.log(`${data}`); });
  });
});
