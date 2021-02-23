const chalk = require('chalk');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');
const { argv } = require('process');

const addNote = (title, body) => {
    const notes = loadNotes();
    //Inefficient, bad, looks through every note even after finding a match
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
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

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(chalk.inverse.yellow(note.title));
        console.log(chalk.yellow(note.body));
    } else {
        console.log(chalk.red.inverse.bold('No note with title ' + title + ' found!'));
    }
};

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
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
};