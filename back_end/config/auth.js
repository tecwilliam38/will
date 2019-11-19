const express = require("express");
const app = express();
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");


//Model usuario
require("../models/Usuario");
module.exports = function(passport) {
    passport.use(new localStrategy({ usernameField: 'email' }, (email, senha, done) => {
        Usuario.findOne({ email: email }).then((usuario) => {
            if (!usuario) {
                return done(null, false, { message: "Email incorreto" })
            }

            bcrypt.compare(senha, usuario.email, (erro, senhaConfere) => {
                if (senhaConfere) {
                    return done(null, user)
                } else {
                    return done(null, false, { message: "Senha incorreta" })
                }
            })
        })
    }))
    passport.serializeUser((usuario, done) => {
        done(null, usuario.id)
    })
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, usuario) => {
            done(err, user)
        })
    })
}

app.listen(console.log("Arquivo auth.js ok"))