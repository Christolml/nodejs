console.log('Starting app.js');


const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js');

const argv = yargs.argv;
let command = process.argv[2];
console.log('Command:', command);
// console.log('Process', process.argv);
console.log('Yargs',argv);

if (command === 'add') {
    notes.addNote(argv.title,argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.deleteNote(argv.title);
} else {
    console.log('Command not recognized');
}

// argv es un array el cual en el promero es el ejecutable de node, 
// el segundo es la ruta del archivo que estamos corriendo y el ultimo es el itam que se mando en la terminal
// console.log(process.argv);

