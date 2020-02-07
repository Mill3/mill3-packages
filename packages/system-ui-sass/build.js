// build.js
const sass = require("node-sass");
const chalk = require("chalk");
const fs = require("fs");
const path = require(`path`);

const jsonToSassVars = require("./utils/jsonToSassVars");

const SRC_PATH = path.join(__dirname, `./src`);
const DIST_PATH = path.join(__dirname, `./dist`);
const INPUT_FILENAME = `system-ui.scss`;
const OUTPUT_FILENAME = `system-ui.css`;

const PATHS = {
  main: path.resolve(SRC_PATH, INPUT_FILENAME),
  theme: path.resolve(`theme.js`),
  dist: path.resolve(DIST_PATH, OUTPUT_FILENAME)
};

// load theme file
const theme = require(PATHS["theme"]);

// Read main SCSS content
fs.readFile(PATHS[`main`], (err, data) => {
  if (err) {
    console.error("err:", err);
    return;
  }

  // get file source as string
  const source = data.toString();

  // console.log(jsonToSassVars(theme));

  sass.render(
    {
      // concat parsed JSON theme variables with SCSS raw string source
      data: jsonToSassVars(theme) + source,
      outFile: PATHS[`dist`],
      outputStyle: `compressed`,
      includePaths: [SRC_PATH]
    },
    function(err, result) {
      if (!err) {
        fs.writeFile(PATHS[`dist`], result.css, function(fsErr) {
          if (!fsErr)
            console.log(
              `${chalk.green("SUCCESS!")} ${OUTPUT_FILENAME} file generated!`
            );
          else
            console.log(
              `${chalk.red(
                "ERROR!"
              )} During ${OUTPUT_FILENAME} file generation: ${err}`
            );
        });
      } else {
        console.log(
          `${chalk.red(
            "ERROR!"
          )} During ${OUTPUT_FILENAME} file generation: ${err}`
        );
      }
    }
  );
});
