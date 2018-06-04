console.log('Starting app');

/*  FILE SYSTEM, El módulo fs proporciona una API para interactuar con el sistema de archivos de una manera estrechamente
 modelada alrededor de las funciones POSIX estándar. */
const fs = require('fs');
// OPERATING SYSTEM, El módulo os proporciona varios métodos de utilidad relacionados con el sistema operativo.
const os = require('os');
const notes = require('./notes.js');

let user = os.userInfo();
// console.log(user);


// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });

var res = notes.addNote();
console.log(res);

var res = notes.sum(65,-26);
console.log(res);

