//Constantes
const express = require("express");
const app = express();
const Sequelize = require("sequelize");

//Conexção com bd postgres
const db = new Sequelize('projeto_final', 'postgres', 'postgres', { //Banco usuario senha
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
})
module.exports = {
    Sequelize: Sequelize,
    sequelize: db
}
app.listen(console.log("Arquivo db.js ok"))