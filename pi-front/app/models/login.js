var Base = require("./base");

var Login = function (login) {
  this.restName = "login";

  if (login != undefined) {
    this.email = login.login;
    this.senha = login.senha;
  } else {
    this.email = "";
    this.senha = "";
  }
};

Login.prototype = new Base();

module.exports = Login;
