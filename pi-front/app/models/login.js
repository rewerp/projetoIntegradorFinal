var Base = require("./base");

var Login = function (login) {
  this.restName = "login";

  if (login != undefined) {
    this.login = login.login;
    this.senha = login.senha;
  } else {
    this.login = "";
    this.senha = "";
  }
};

Login.prototype = new Base();

module.exports = Login;
