// build.js
const sass = require("sass");
const chalk = require("chalk");
const fs = require("fs");
const path = require(`path`);

const jsonToSassVars = require("./utils/jsonToSassVars");

const SRC_PATH = path.join(__dirname, `./src`);
const TESTS_PATH = path.join(__dirname, `./src/tests`);
const DIST_PATH = path.join(__dirname, `./dist`);
const INPUT_FILENAME = `system-ui.scss`;
const OUTPUT_FILENAME = `system-ui.css`;

const PATHS = {
  main: path.resolve(SRC_PATH, INPUT_FILENAME),
  test: path.resolve(TESTS_PATH, `index.scss`),
  dist: path.resolve(DIST_PATH, OUTPUT_FILENAME)
};


// Read test SCSS file
fs.readFile(PATHS[`test`], (err, data) => {
  if (err) {
    console.error("err:", err);
    return;
  }

  const result = sass.compileString(data.toString(),
    {
      loadPaths: [TESTS_PATH]
    }
  );

  // output test rests
  console.log(result.css.toString());
});

// Read main SCSS content
fs.readFile(PATHS[`main`], (err, data) => {
  if (err) {
    console.error("err:", err);
    return;
  }

  // get file source as string
  const source = data.toString();

  sass.render(
    {
      // concat parsed JSON theme variables with SCSS raw string source
      data: source,
      outFile: PATHS[`dist`],
      // outputStyle: `compressed`,
      includePaths: [SRC_PATH]
    },
    function(err, result) {
      if (!err) {
        fs.writeFile(PATHS[`dist`], result.css, function(fsErr) {
          if (!fsErr) {
            const stats = fs.statSync(PATHS[`dist`]);
            const size = stats.size / 1024;
            const kb = Math.round((size + Number.EPSILON) * 100) / 100;

            console.log(
              `${chalk.green("SUCCESS!")} ${OUTPUT_FILENAME} file generated! ${chalk.yellow(`${kb}kb`)}`
            );
          }
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
