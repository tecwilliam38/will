//Constantes
const express = require("express");
const app = express();

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

//Função para deletar usuarios
app.get('/delete/:id', function(req, res) {
        Usuario.destroy({ where: { 'id': req.params.id } }).then(function() {
            res.send("Usuário deletado com sucesso")
        }).catch(function(erro) {
            res.send("usuário nao existe" + errro)
        })
    })
    // Rota de cadastro
app.get('/', function(req, res) {
    Usuario.findAll().then(function(usuarios) {
        res.send(usuarios);
    })
})

//Mensagem de certificação
app.listen(console.log("Arquivo usuDefine.js ok"))