'use strict';

const conn = require('./model');

class TeamModel {
    
/* las querys de la base de datos reciben dos parametro, el primero es la query a la bd y el segundo es una funcion que reciben
como parametros tres parametros opcionales (error, results, fields) y esa funcion se ejecutara deendiendo de lo que nos devuelva la query
la funcion es las querys de este archivo son callbacks que se estan ejecutando en nuestro controlador (team-controller)
EJEMPLO 
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
connection.end(); */

    getAll(cb) {
        conn.query('SELECT * from team',cb)

    }

    getOne(id, cb){
      conn.query('SELECT * FROM team where id = ?', id, (cb));
    }

    // las callback (cb) que van a ejecutar en el query de update y de insert se encuentran en el controlador
    save(data,cb) {
      conn.query('SELECT * FROM team where id = ?', data.id, (err,rows) => {
        console.log(`Num de registros: ${rows.length}`);

        if(!err) {
          return (rows.length == 1) 
            ? conn.query('UPDATE team SET ? WHERE id = ?', [data, data.id], cb)
            : conn.query('INSERT INTO team SET ?', data, cb);
        }
      });
    }

    delete(id, cb) {
      conn.query('DELETE FROM team where id = ?', id, cb);
    }

}

module.exports = TeamModel;



