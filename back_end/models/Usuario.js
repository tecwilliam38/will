const express = require('express');
const app = express();
const db = require('./db');
const Sequelize = require("sequelize");

//Sequelize Model

const Usuario = db.sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    nascimento: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    login: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.TEXT
    },

})


db.sequelize.model('usuario', Usuario);
module.exports = Usuario
app.listen(console.log("Arquivo Usuario.js ok"))
    //Usuario.sync({ force: true })