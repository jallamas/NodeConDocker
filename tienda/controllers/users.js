'use strict'

const UserService = require('../services/user')
const bcrypt    = require('bcryptjs');
const passport  = require('passport');
const jwt       = require('jsonwebtoken');
const error_types = require('./error_types');

let controller = {
 
    register: (req, res, next) => {
        let resultado = UserService.findUser({username : req.body.username});
        if (resultado != undefined) {
            next(new error_types.InfoError("El nombre de usuario ya existe"));
        } else {
            let hash = bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_ROUNDS));
            let inserted = UserService.insertUser({
                username: req.body.username,
                password: hash
            })
            res.json(inserted)
        }
    }
    ,
    login: (req, res, next) => {
        console.log("Caso login")
        passport.authenticate("local", {session: false}, (error, user) => {

            if (error || !user) {
                next(new error_types.Error404("El nombre de usuario o la contraseña no son correctos."))
            } else {
                const payload = {
                    sub: user.id,
                    exp: Date.now() + parseInt(process.env.JWT_LIFETIME),
                    username: user.username
                };

                const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET, {algorithm: process.env.JWT_ALGORITHM});
                res.json({ 
                    username: user.username,
                    token: token 
                });

            }

        })(req, res)
    }


}

module.exports = controller;