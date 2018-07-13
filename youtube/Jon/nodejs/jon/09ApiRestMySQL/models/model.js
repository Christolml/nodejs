// va a estar manipulando todo lo que tiene que ver con la conexion a la base de datos
'use strict'


const mysql = require('mysql'),
    conf = require('./db-conf'),
    dbOptions = {
        host: conf.mysql.host,
        user: conf.mysql.user,
        password: conf.mysql.pass,
        port: conf.mysql.port,
        database: conf.mysql.db
    },
    conn = mysql.createConnection(dbOptions);

conn.connect((err)=> {
    return (err) 
    ? console.log(`Error al Conectarse a MySQL: ${err.starck}`) 
    : console.log(`Conexion establecida con MySQL # ${conn.threadId}`); //con.threadId nos guarda el ID del proceso de la conexion
});

module.exports = conn;