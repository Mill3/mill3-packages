#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const THEME = path.resolve(path.join(__dirname, "./theme.js"));
const DIST = path.resolve(path.join(__dirname, "./theme.babel.js"));

// read theme.js file contents
fs.readFile(THEME, (err, data) => {
  if (err) {
    console.error("err:", err);
    return;
  }

  // get file source as string
  const source = data.toString();

  // replace CommonJS export to ES6 export
  const output = source.replace("module.exports =", "export default");

  // write file
  fs.writeFile(DIST, output, fsErr => {
    if (fsErr) console.error(`Error transpiling ${THEME} to ES6.`);
  });
});
