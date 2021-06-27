const boxen = {
  padding: 1,
  margin: 0.5,
  borderStyle: "round",
  borderColor: "green",
};

const logText = {
  noPath: `The specified file does not exists or not accessible,\nCreate a new file instead.`,
  noVariable: `The specified variable does not exists,\nCreate a new variable instead.`,
  success: `The secret key was copied into the specified file.`,
};

const yargs = {
  usage: "Usage: -l <length> -c <characters>",
  options: [
    {
      key: "l",
      data: {
        alias: "length",
        describe: "Result length",
        type: "number",
        default: 20,
        defaultDescription: "20 digits",
      },
    },
    {
      key: "c",
      data: {
        alias: "chars",
        describe: "List characters",
        type: "string",
        default: "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        defaultDescription: "[A-Z,a-z,0-1] w/o [I,O]",
      },
    },
    {
      key: "v",
      data: {
        alias: "variable",
        describe: "Variable Name\n(variable name in .env file)",
        type: "string",
        default: "VUE_APP_SECRET_KEY",
      },
    },
    {
      key: "f",
      data: {
        alias: "filepath",
        describe: "File Path\n(start from project root directory)",
        type: "string",
        default: ".env",
      },
    },
  ],
};

module.exports = {
  yargs,
  boxen,
  logText,
};
