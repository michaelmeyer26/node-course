const chalk = require('chalk');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');
const { argv } = require('process');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse.bold('Note title taken!'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);
    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse.bold('No note with that title found.'));
    } else {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Note removed!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.yellow.inverse('Your notes: '));
    notes.forEach( note => {
        console.log(chalk.yellow(note.title));
    });
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};