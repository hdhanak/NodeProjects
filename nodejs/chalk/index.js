const chalk = require('chalk');
const validator = require('validator')

// console.log(chalk.blue.italic.inverse("true"));
const res  = validator.isEmail("thapa@thapaco.m");
// console.log(validator.isEmail("thapa@thapaom"));
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));
// console.log(res);


