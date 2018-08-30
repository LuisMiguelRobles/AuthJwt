module.exports = function (app) {

    const {
        Usuarios
    } = require('../conexion'),
        jwt = require('jsonwebtoken');



    app.get('/', (req, res, next) => {

        res.render('login', {
            title: 'Autenticación de Usuarios',

        });

    })

    app.get('/funciona', (req, res, next) => {

        res.render('funciona', {
            title: 'Usuario Autenticado',

        });

    })

    // create a user
    app.post('/api/CreateUsers', (req, res) => {


        let user = {

            nombre: req.body.nombre,
            apellido: req.body.apellido,
            cedula: req.body.cedula,
            nacionalidad: req.body.nacionalidad,
            telefono: req.body.telefono,
            celular: req.body.celular,
            fecha_nacimiento: req.body.fecha_nacimiento,
            edad: req.body.edad,

        }

        Usuarios.create(user).then(function (result) {
            console.log(user);
            res.send(result);
        })



    })
    // get all users
    app.get('/api/getUsers', (req, res) => {
        Usuarios.findAll().then(users => {
            console.log(users)
            res.json(users);
        })

    })

    app.post('/api/deleteUser', (req, res) => {

        let user = {
            id: req.body.id
        }
        console.log(user);

        Usuarios.destroy({
            where: {
                id_usuario: parseInt(user.id)
            },
            truncate: false
        }).then(function (status) {
            console.log(user);

        });



    });

    app.post('/api/login', (req, res) => {

        let user = {
            nombre: req.body.nombre,
            cedula: req.body.cedula
        };





        Usuarios.findAll({
            where: {
                nombre: user.nombre,
                cedula: user.cedula
            }
        }).then((response) => {
            console.log(response.length);

            let token = jwt.sign({
                user: response
            }, 'secret');


            if (response.length > 0) {

                res.json({
                    estado: true,
                    token: token

                })

            } else {

                res.json({
                    estado: false
                })

            }

        });



    });




}