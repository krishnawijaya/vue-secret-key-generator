const c = require("../configs");
const o = require("../options");

function generate(length, characters) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function beautify(value, status = true) {
  let result = "";

  if (status) {
    const colored = c.chalk.green(value);
    result = c.boxen(colored, o.boxen);
  } else {
    result = c.chalk.red.bold(value);
  }
  return result;
}

function setKey(
  key,
  options = {
    filepath: ".env",
    variable: "VUE_APP_SECRET_KEY",
  }
) {
  const fullpath = c.path.join(process.cwd(), options.filepath);

  const isExists = (fullpath) => {
    return new Promise((resolve) => {
      c.fs.access(fullpath, c.fs.constants.F_OK, (error) => {
        if (error) resolve(false);
        else resolve(true);
      });
    });
  };

  const keyPair = `${options.variable}=${key}`;

  if (isExists) {
    c.fs.readFile(fullpath, "utf8", function (error, data) {
      if (error) return console.log(error);

      let result = data;

      if (data.includes(options.variable)) {
        const regex = new RegExp(`${options.variable}.*`, "gi");
        result = data.replace(regex, keyPair);
      } else console.log(beautify(o.logText.noVariable, false));

      write(fullpath, result);
    });
  } else {
    console.log(beautify(o.logText.noPath, false));
    write(fullpath, keyPair);
  }
}

function write(filepath, data) {
  c.fs.writeFile(filepath, data, "utf8", function (error) {
    if (error) return console.log(error);
    return console.log(o.logText.success);
  });
}

module.exports = {
  generate,
  beautify,
  setKey,
};
