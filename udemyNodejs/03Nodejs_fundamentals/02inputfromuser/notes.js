console.log('starting notes.js!');

let addNote = (title,body) => {
    console.log('Adding note', title,body);
};


let getAll = () => {
    console.log('Getting all notes');
};

let getNote = (title) => {
    console.log('Reading note', title)
};

let deleteNote = (title) => {
    console.log('Deleting note', title);
};


module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote
};