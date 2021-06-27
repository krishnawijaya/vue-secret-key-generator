const boxen = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
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
        default: 15,
        defaultDescription: "15 digits",
      },
    },
    {
      key: "c",
      data: {
        alias: "chars",
        describe: "Included characters",
        type: "string",
        default: "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        defaultDescription: "[A-Z,a-z,0-1] w/o [I,O]",
      },
    },
  ],
};

module.exports = {
  yargs,
  boxen,
};
