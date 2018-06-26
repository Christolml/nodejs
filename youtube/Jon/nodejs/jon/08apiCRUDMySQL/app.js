'use strict';


// dependencias que se van a ocupar
const express = require('express'),
    pug = require('pug'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon')(`${__dirname}/public/favicon.png`),
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
     // objeto que contiene todas las opciones para conectarse a la bd
    dbOptions = {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'indentation_war2'
    },
    // nos va a servir para instanciar la conexion a mysql
    conn = myConnection(mysql, dbOptions, 'request');

let app = express();

/* con set me permite establecer parametros,
en el primero se le indica en donde van a estar las vistas 
el segundo es el motor de las vistas y se le dice que se va usar pug
al ultimo se le esta configurando el puerto */
app.set('views', viewDir);
app.set('view engine', 'pug');
app.set('port',port);

/* se definen los middlewares con los que va a trabajar y se usa el metodo use
con bodyParser.json() me permite manipulr el envio de informacion de la aplicacion en formato json
bodyParser.urlencoded() me permite que mis formularios pueda estar enviando variables y entonces node las pueda recibir a traves de su atributo name como una variable
publicDir, se establece cual sera el directorio publico
favicon, el manejo del favicon */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(publicDir);
app.use(favicon);

// se le dice que use la configuracion de mysql
app.use(conn);

/* En mi index, se hace una consulta a la bd y se despliega la info al index con ayuda de res.render pasandole
los parametros que en index.pug los va a cacharr */
app.get('/', (req,res,next) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM team', (error, data) => {
            if (!error) {
                res.render('index', {
                    title: 'Indentation War',
                    data: data
                });
            }
        });
    });

});


app.get('/agregar', (req,res,next) => {
    res.render('add', {
        title: 'Agregar Contacto'
    });
});

app.post('/', (req,res,next) => {
    req.getConnection((err,conn) => {
        let contacto = {
            id: 0,
            name: req.body.name,
            twitter: req.body.twitter,
            country: req.body.country,
            side: req.body.side
        };

        conn.query('INSERT INTO team SET ?', contacto, (err,data) => {
            if(!err) {
                res.redirect('/');
            } else {
                res.redirect('/agregar');
            }

        });
    });

});


app.get('/editar/:id', (req,res,next) => {
    let id = req.params.id;

    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM team WHERE id = ?',id, (err, data) => {
            if (!err) {
                res.render('edit', {
                    title: 'Editar Contacto',
                    data: data
                });
            }
        });
    });
});


app.post('/actualizar/:id', (req,res,next) => {
    req.getConnection((err,conn) => {
        let contacto = {
            id: req.body.id,
            name: req.body.name,
            twitter: req.body.twitter,
            country: req.body.country,
            side: req.body.side
        };

        conn.query('UPDATE team SET ? WHERE id = ?', [contacto, contacto.id], (err,data) => {
            if (!err) {
                res.redirect('/');
            } else {
                res.redirect('/editar/:id');
            }

        });

    });
});

app.post('/eliminar/:id', (req,res,next) => {
    req.getConnection((err,conn) => {
        let id = req.params.id;

        conn.query('DELETE FROM team WHERE id = ?', id , (err, data) => {
            if (!err) {
                res.redirect('/');
            } else {
                return next(new Error('Registro no encontrado'));
            }
        });
    });
});

app.use((req,res,next) => {
    let err = new Error();
    err.status = 404;
    err.statusText = 'NOT FOUND';

    res.render('error', {error: err});

});



app.listen(app.get('port'), () => console.log('Iniciando API CRUD Express con MySQL'));






