#!/usr/bin/env node
"use strict";

// lib
const replace = require("replace-in-file");
const args = require("args");

// default value to replace layer
const defaultThemeDomain = "mill3wp";
const defaultThemeNamespace = "Mill3WP";

// available command line args
args
  .option("domain", "The theme domain name", defaultThemeDomain)
  .option("namespace", "The theme PHP spacename", defaultThemeNamespace);

// get arguments
const flags = args.parse(process.argv);

// regex
var reDomain = new RegExp(defaultThemeDomain, "g");
var reNamespace = new RegExp(defaultThemeNamespace, "g");

// replace options
const options = {
  files: ["**/*.php", "**/*.js"],
  ignore: ["install.js", "node_modules/**"],
  from: [reDomain, reNamespace],
  to: [flags.domain, flags.namespace],
  countMatches: true
};

// replace all files with new ThemeDomain and PHP Namespace
replace(options)
  .then(changes => {
    console.log(`Scanned ${changes.length} file(s)!`);
  })
  .catch(error => {
    console.error("Error occurred:", error);
  });
