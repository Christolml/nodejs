'use strict';

const express = require('express'),
    app = express();    


app
    .get('/', (req, res) => {
        // res.end('<h1>Hola mundo desde express.js</h1>');
        res.send('<h1>Hola mundo desde express.js</h1>');
    })
    .get('/ed', (req, res) => {
        res.redirect(301, 'http://google.com');

    })
    .get('/json', (req, res) => {
        res.json({
            name: "Christopher",
            age: 21,
            alias: "proChris"
        });
    })

    .get('/render', (req, res) => {
        // no funciona por que hay que configurar el tipo de view que desplegara express
        res.render(`${__dirname}/index.html`);

    })
    .listen(3000, () => console.log('Iniciando express en el puerto 3000'));


