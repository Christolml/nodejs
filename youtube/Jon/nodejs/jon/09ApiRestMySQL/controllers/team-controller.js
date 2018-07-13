'use strict';

const TeamModel = require('../models/team-model'),
    tm = new TeamModel();

/* como el controlador se va a comunicar con mi modelo debe de tener mapeado los metodos que se invocan en el modelo
como el controlador va actuar como middleware los parametros de los metodos van a cambiar por los parametros de 
middleware en express (req,res,next) */
class TeamController {

    /* tm.getAll() esta llamando la funcion de getAll de TeamModel (tm) y esa funcion de TeamModel recibe como parametros
    una funcion (el callback) que se ejecutara junto a una query a la base de datos */
    getAll(req, res, next) {
        tm.getAll((err, data) => {
            if (!err) {
                res.render('index', {
                    title: 'Indentation War',
                    data: data
                });
            }
        });
    }

    getOne(req, res, next) {
        let id = req.params.id;
        console.log(id);

        tm.getOne(id, (err, data) => {
            if (!err) {
                res.render('edit', {
                    title: 'Editar Contacto',
                    data: data
                });
            }
        });

    }

    /* en el id se esta usando un operador de corto circuito de js, con eso se esta diciendo que si 
    existe el id en el req se le pone ese id si no existe se le pone un 0 */
    save(req, res, next) {
        let contacto = {
            id: (req.body.id || 0),
            name: req.body.name,
            twitter: req.body.twitter,
            country: req.body.country,
            side: req.body.side
        };

        console.log(contacto);

        tm.save(contacto, (err) => {
            if (!err) {
                res.redirect('/')
            } else {
                return next(new Error('Registro no salvado'))
            }
        });
    }


    delete(req, res, next) {
        let id = req.params.id;
        console.log(id);

        tm.delete(id, (err,data) => {
            if (!err) {
                res.redirect('/');
            } else {
                return next(new Error('Registro no encontrado'));
            }
        });
    }

    addForm(req, res, next) {
        res.render('add', {
            title: 'Agregar Contacto'
        });
    }

    error404 (req,res,next) {
        let err = new Error();
        err.status = 404;
        err.statusText = 'NOT FOUND';
    
        res.render('error', {error: err});
    }
}


module.exports = TeamController;


