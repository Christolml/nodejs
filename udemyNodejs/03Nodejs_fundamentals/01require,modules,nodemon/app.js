console.log('Starting app.js');

/*  FILE SYSTEM, El módulo fs proporciona una API para interactuar con el sistema de archivos de una manera estrechamente
 modelada alrededor de las funciones POSIX estándar. */
const fs = require('fs');
// OPERATING SYSTEM, El módulo os proporciona varios métodos de utilidad relacionados con el sistema operativo.
const os = require('os');
const _ = require('lodash');
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

console.log('Result:', notes.sum(35,-10));

// LODASH, nos ofrece varias utilidades a la hora de programar 
// A modern JavaScript utility library delivering modularity, performance & extras.

console.log(_.isString(true));
console.log(_.isString('Christopher'));

let filteredArray = _.uniq(['Christopher', 'Esmeralda', 2,'Trosca',4,2,6,7,8,7,8,5,3,8, 'Esmeralda']);
console.log(filteredArray);




