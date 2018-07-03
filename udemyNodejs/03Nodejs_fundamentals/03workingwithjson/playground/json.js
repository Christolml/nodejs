

/* let obj = {
    name: 'Christopher'
};

let stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj); */


/* let personString = '{"name": "Christopher", "age": 21}';
let person = JSON.parse(personString);
console.log(typeof person);
console.log(person); */

const fs = require('fs');

let originalNote = {
    title: 'Title 01',
    body: 'K ongo'
};

// originalNoteString
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
// note
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);



