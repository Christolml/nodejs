'use strict';

const express = require('express'),
    app = express();    


app
    .get('/', (req, res) => res.end('<h1>Hola mundo desde express.js</h1>'))
    // http://localhost:3000/user/19-chris-21
    .get('/user/:id-:name-:age', (req, res) => {
        res.end(`
        <h1>
            ${req.params.name}, bienvenido a express tu id es <b>${req.params.id}</b>
            y tienes ${req.params.age} a&ntilde;os
        </h1>
        `);
    })
    // http://localhost:3000/search?s=que%20onda%20gugul
    .get('/search', (req, res) => {
        res.end(`
            <h1>
                Bienvenido a express, los resultados de tu b&uacute;squeda son:
                <mark>${req.query.s}</mark>
            </h1>
        `)
    })
    .listen(3000, () => console.log('Iniciando express en el puerto 3000'));


