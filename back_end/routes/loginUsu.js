const localStrategy = require('passport-local');
const Sequelize = require("sequelize");
const pg = require('pg');
const bcrypt = require('bcrypt')

//model de usuario
require("../models/Usuario")
const usuLogado = Sequelize.model("usuarios")

module.exports = function(passport) {
    passport.use(new localStrategy({ usuarioLogin: 'login' }, (login, senha, done) => {
        usuLogado.findOne({ login: login }).then((usuario) => {
            if (!usuario) {
                return done(null, false, { message: "Esse usuario não existe" })
            }
            bcrypt.compare(senha, usuario.senha, (erro, batem) => {
                if (batem) {
                    return done(null, user)
                } else {
                    return done(null, false, { message: "senha incorreta" })
                }

            })

        })

    }))

    passport.serializeUser((usuario, done) => {
        done(null, usuario.id)
    })
    passport.serializeUser((usuario, done) => {
        User.findById(id, (err, usuario) => {
            done(err, usuario)
        })
    })

}