const chalk = require('chalk');

const chalkStyling = {
  makeGreen: str => chalk.green(str),
  makeBoldBlue: str => chalk.bold.blue(str),
  makeBoldRed: str => chalk.bold.red(str),
  makeBoldUnderline: str => chalk.bold.underline(str),
  makeItalic: str => chalk.italic(str),
};

module.exports = chalkStyling;
