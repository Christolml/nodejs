'use strict';

// este archivo se dedica a levantar el servidor web

const app = require('./app'),
    server = app.listen(app.get('port'), () => console.log(`Iniciando API REST-MVC Express con MySQL en el puerto ${app.get('port')}`));
