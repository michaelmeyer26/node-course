const chalk = require('chalk');
const { title } = require('process');
const { demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js');

//customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function() {
        console.log('Removing the note...');
    }
});

//Create read command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function() {
        console.log('Reading the note...');
    }
});

//Create list command
yargs.command({
    command: 'list',
    describe: 'Lists out all the currently-saved notes',
    handler: function() {
        console.log('Here is a list of all the notes...');
    }
});

// add, remove, read, list

yargs.parse();