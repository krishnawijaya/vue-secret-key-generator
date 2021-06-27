const configs = require("../configs");
const options = require("../options");

function generate(length, characters) {
  let result = "";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `SECRET KEY: ${result}`;
}

function beautify(text) {
  const colored = configs.chalk.green(text);
  const result = configs.boxen(colored, options.boxen);
  return result;
}

function envExists(path) {
  configs.fs.access(path, configs.fs.F_OK, (error) => {
    if (error) {
      console.error(error);
      console.log(".env file does not exists or no permission.");
      return;
    }
    console.log("FILE EXISTS");
  });
}

module.exports = {
  generate,
  beautify,
  envExists,
};
