//Constantes de servidor
const express = require("express");
const cors = require("cors");
const Sequelize = require("sequelize");
const requireDir = require("require-dir");
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuario');
const session = require("express-session");
const passport = require('passport');
require('./config/auth')(passport);
//App express
const app = express();
app.use(passport.initialize());
app.use(passport.session());
//const UsuDefine = require('./models/usuDefine');
//const UsuCad = require('./models/usuCad');
//chamar o cadastro de usuarios
//require('./models/usuDefine')
//require('../models/usuCad')

//Body Parser
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
bodyParser.urlencoded({ extended: true })
app.use(cors());

//Rota para Login
app.post('/login', function(req, res) {
    console.log(req.body);
    Usuario.findAll({
        where: {
            login: req.body.login,
            senha: req.body.senha
        }
    }).then(function(data) {
        res.send(data);
        res.redirect("/")
    }).catch(function(erro) {
        res.send("Houve um erro" + erro)
    })
})

//cadastrar
app.post('/usuario', function(req, res) {
    Usuario.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        telefone: req.body.telefone,
        nascimento: req.body.nascimento,
        email: req.body.email,
        login: req.body.login,
        senha: req.body.senha,
    }).then(function(data) {
        res.send(data);
        res.redirect('/')
    }).catch(function(erro) {
        res.send("Houve um erro" + erro)
    })
})



//Porta onde o servidor roda
app.listen(3001, function() {
    console.log("Servidor rodando na porta 3001");
});