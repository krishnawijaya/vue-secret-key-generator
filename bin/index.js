#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs
  .usage("Usage: -l <length> -c <characters>")
  .option("l", {
    alias: "length",
    describe: "Result length",
    type: "number",
    default: 15,
    defaultDescription: "15 digits",
  })
  .option("c", {
    alias: "chars",
    describe: "Included characters",
    type: "string",
    default: "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    defaultDescription: "[A-Z,a-z,0-1] w/o [I,O]",
  }).argv;

function generate(length, characters) {
  let result = "";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

console.log(generate(options.length, options.chars));
