console.log('Starting app.js');


const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js');

const argv = yargs.argv;
let command = process.argv[2];
console.log('\nCommand:', command);
// console.log('Process', process.argv);
// console.log('Yargs',argv);


if (command === 'add') {
    let note = notes.addNote(argv.title,argv.body);
    if (note) {
        console.log(`Nota creada satisfactoriamente`);
        notes.logNote(note);
    } else {
        console.log('Nota duplicado');
    }
} else if (command === 'list') {
    noteAll = notes.getAll();
    for (let i = 0; i < noteAll.length; i++) {
        console.log(`Titulo: ${noteAll[i].title} 
Body: ${noteAll[i].body}
Numero nota: ${i}\n`);
    }
} else if(command === 'read') {
    let getNote = notes.getNote(argv.title);
    if (getNote[0]) {
        notes.logNote(getNote[0]);
        console.log(`Numero nota: ${getNote[1]}`);
    }
} else if (command === 'remove') {
    let noteRemoved = notes.deleteNote(argv.title);
    let message = noteRemoved ? 'La nota se elimino' : 'Nota no encontrada';
    console.log(message);
} else {
    console.log('Command not recognized');
}


