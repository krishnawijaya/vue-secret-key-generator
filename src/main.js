const c = require('./configs');
const o = require('./options');
const f = require('./functions');

let key = '';
let yargs;

for (let index = 0; index < o.yargs.options.length; index++) {
  if (index + 1 == o.yargs.options.length) {
    yargs.option(o.yargs.options[index].key, o.yargs.options[index].data);
    key = f.generate(yargs.argv.length, yargs.argv.chars);
  } else {
    if (index == 0) {
      yargs = c.yargs.usage(o.yargs.usage);
    }

    yargs.option(o.yargs.options[index].key, o.yargs.options[index].data);
  }
}

module.exports = function() {
  f.setKey(key, {
    filepath: yargs.argv.filepath,
    variable: yargs.argv.variable,
  });
  console.log(f.beautify(`KEY: ${key}`));
};
