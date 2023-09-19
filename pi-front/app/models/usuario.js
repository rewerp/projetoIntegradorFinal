var Base = require("./base");

var Usuario = function (usuario) {
  this.restName = "usuarios";

  if (usuario != undefined) {
    this.id = usuario.id;
    this.nome = usuario.nome;    
    this.cpf =  usuario.cpf;
    this.dataNascimento = usuario.dataNascimento;
    this.endereco = usuario.endereco; 
    this.numero = usuario.numero;
    this.cep = usuario.cep;
    this.telefone = usuario.ddd + usuario.celular; 
    this.email = usuario.email;
    this.senha = usuario.senha;
    this.cidade = usuario.cidade;

  } else {
    this.id = 0;
    this.nome = "";    
    this.cpf = 0;
    this.dataNascimento = "";
    this.endereco = ""; 
    this.numero = "";
    this.cep = "";
    this.telefone = ""; 
    this.email = "";
    this.senha = "";
    this.cidade = "";
  }
};

Usuario.prototype = new Base();

Usuario.todos = function (callback) {
  new Usuario().todos(callback);
};

module.exports = Usuario;
