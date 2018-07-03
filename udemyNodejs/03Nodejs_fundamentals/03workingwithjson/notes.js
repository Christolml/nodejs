console.log('starting notes.js!');

const fs = require('fs');

/* nos traera los notas que se encuentran en nuestro json y las regreso en 
formato de objeto de js, si no existe el archivo json regresa un array vacio
 */
let fetchNotes = () => {
    try{
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


let addNote = (title,body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
/*   nos sirve para verificar si hay notas duplicadas por el titulo 
    si se quiere guardar una nota y el titulo ya existe esa nota se va 
    dentro al nuevo Array de duplicateNotes */
     let duplicateNotes = notes.filter((note) => note.title === title);

     if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
     } 

};


let getAll = () => {
    return fetchNotes();
};

let getNote = (title) => {
    let numNote = 0;
    let notes = fetchNotes();
    let filteredNote = notes.filter((note) => note.title === title)
    for (let i = 0; i < notes.length; i++) {
        if (filteredNote[0].title === notes[i].title) {
            numNote = i;
        }
    }
    return [filteredNote[0], numNote];

};

/* se traen los notas que existen, se hace un filtro y se guarda en un nuevo array (filteredNotes) las notas que no
coincidan con el titulo que se mando como parametro, y al nuevo array se guarda con saveNotes de esa forma se estara 
eliminando la nota que se paso como parametro de nuestro archivo json, al ultimo se hace un return de un bool se manda true
si se cumple la condicion o un false */
let deleteNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
    debugger;
    console.log(`-----
Title: ${note.title}
Body: ${note.body}`);
};


module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote,
    logNote
};