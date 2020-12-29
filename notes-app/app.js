// const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const notes = getNotes();
console.log(notes);

// console.log(validator.isURL('https://mead.io'));
console.log(chalk.green.inverse.bold('Success!'));