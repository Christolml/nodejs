console.log('Starting app.js');


const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js');

const argv = yargs.argv;
let command = process.argv[2];
console.log('Command:', command);
console.log('Process', process.argv);
console.log('Yargs',argv);

if (command === 'add') {
    notes.addNote(argv.title,argv.body);
} else if (command === 'list') {
    console.log('Listing all notes');
} else if(command === 'read') {
    console.log('Reading note');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not recognized');
}

// argv es un array el cual en el promero es el ejecutable de node, 
// el segundo es la ruta del archivo que estamos corriendo y el ultimo es el itam que se mando en la terminal
// console.log(process.argv);

