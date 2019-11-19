//consatantes
const express = require("express");
const app = express();
const Sequelize = require("sequelize");

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

//Editar usuario
app.get('/index/minha-conta/', (req, res) => {
    res.send('editar dados')
})

app.listen(console.log("Arquivo usuCad.js ok"))