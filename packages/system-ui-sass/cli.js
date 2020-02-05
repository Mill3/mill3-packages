#!/usr/bin/env node
const fs = require("fs");
const path = require(`path`);

const THEME = path.resolve(path.join(__dirname, `./theme.js`));
const DIST = path.resolve(path.join(process.cwd(), "./theme.js"));

// var readStream = fs.createReadStream(DIST);

fs.copyFile(THEME, DIST, err => {
  if (err) throw err;
  console.log(`${THEME} was copied to ${DIST}`);
});
