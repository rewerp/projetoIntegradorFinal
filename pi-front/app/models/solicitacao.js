var Base = require("./base");

var Solicitacao = function (solicitacao) {
  this.restName = "solicitacoes";

  if (solicitacao != undefined) {
    this.id = solicitacao.id;
    this.usuario_id = solicitacao.usuario_id;    
    this.tipo_servico =  solicitacao.tipo_servico;
    this.endereco = solicitacao.endereco;
    this.cep = solicitacao.cep; 
    this.status = solicitacao.status;

  } else {
    this.id = 0;
    this.usuario_id = 0;    
    this.tipo_servico =  "";
    this.endereco = "";
    this.cep = ""; 
    this.status = "";
  }
};

Solicitacao.prototype = new Base();

Solicitacao.todos = function (callback) {
  new Solicitacao().todos(callback);
};

module.exports = Solicitacao;
