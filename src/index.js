const configs = require("./configs");
const options = require("./options");
const functions = require("./functions");

// Shorthand
const yopt = options.yargs.options;

const params = configs.yargs
  .usage(options.yargs.usage)
  .option(yopt[0].key, yopt[0].data)
  .option(yopt[1].key, yopt[1].data).argv;

const key = functions.generate(params.length, params.chars);
const result = functions.beautify(key);

module.exports = function () {
  console.log(result);
  console.log(__dirname);
};
