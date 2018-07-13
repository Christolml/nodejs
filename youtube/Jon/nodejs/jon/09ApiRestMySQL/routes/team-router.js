'use strict';

// este archivo es para el manejo de las rutas

const TeamController = require('../controllers/team-controller'),
    express = require('express'),
    router = express.Router(),
    tc = new TeamController();

// como ya no se esta haciendo la estancia al objeto app sino que ahora se hace al objeto router
router

    .get('/', tc.getAll)

    .get('/agregar', tc.addForm)

    .post('/', tc.save)

    .get('/editar/:id', tc.getOne)

    .put('/actualizar/:id', tc.save)

    .delete('/eliminar/:id', tc.delete)

    .use(tc.error404); 

// se exporta toda la instancia de router
module.exports = router;