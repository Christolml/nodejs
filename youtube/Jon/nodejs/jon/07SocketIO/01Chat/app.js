'use strict';


const express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    io = require('socket.io')(http),
    port = process.env.PORT || 3000,
    publicDir = express.static(`${__dirname}/public`);


// MIDDLEWARE
app 
    .use(publicDir)     // se dice cual es el directorio publico
    .get('/', (req, res) => res.sendFile(`${publicDir}/index.html`));   // despliega la ruta del home
    
http.listen(port, ()=> console.log('Iniciando Express y Socket.IO en localhost:%d',port));

io.on('connection', (socket) => {
    socket.broadcast.emit('new user', {message: 'Ha entrado un usuario al Chat'});

    socket.on('new message', message => io.emit('user says', message));

    socket.on('disconnect', () => {
        console.log('Ha salido un usuario del chat');
        socket.broadcast.emit('bye bye user', {message: 'Ha salido un usuario del chat'});
    });
});

