var Login = require("../models/login");
var Cookie = require("../helpers/cookie");

var LoginController = {
  index: function (req, res, next) {
    var erro = req.query.erro;
    if (erro === undefined) {
      erro = "";
    }
    res.render("./login/index", { erro: erro });
  },
  autenticar: function (req, res, next) {
    var login = new Login();
    login.login = req.body.email;
    login.senha = req.body.senha;
    login.autenticar(function (retorno) {
      if (retorno.erro) {
        var erro = retorno.mensagem;
        if (erro === undefined) {
          erro = "";
        }
        res.render("./login/index", { erro: erro });
      } else {
        Cookie.set(res, "usuario", retorno.data);
        res.redirect("/usuarios");
      }
    });
  },
  deslogar: function (req, res, next) {
    Cookie.remove(res, "usuario");
    res.redirect("/");
  },
};

module.exports = LoginController;
