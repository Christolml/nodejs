'use strict';

const express = require('express'),
    app = express();    // app es una instancia de express

 /* .get(),  obtiene una url
 .listen(),    el puerto por el que escuche */
app
    .get('/', (req, res) => res.end('<h1>Hola mundo desde express.js</h1>'))      
    .listen(3000, () => console.log('Iniciando express en el puerto 3000'));       


