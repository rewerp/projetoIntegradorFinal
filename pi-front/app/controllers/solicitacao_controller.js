var Solicitacao = require("../models/solicitacao");
var Usuario = require("../models/usuario");

var SolicitacaoController = {
  index: function (req, res, next) {
    new Usuario({ id: req.usuarioLogado.id }).buscar(function (usuario) {     
      if (usuario.erro !== undefined) {
        res.redirect("/login");
      } else {  
        res.render("solicitacao/index", { title: "Solicitação", usuario: usuario });                
      }  
    });
    
  },
  concluido: function (req, res, next) {   
    res.render("solicitacao/concluido", { id : req.params.id }); 
  },  
  enviar: function (req, res, next) {
    var solicitacao = new Solicitacao();
    solicitacao.usuario_id = req.usuarioLogado.id;  
    solicitacao.tipo_servico = req.body.tipo_servico; 
    solicitacao.endereco = req.body.endereco;
    solicitacao.cep = req.body.cep;
    solicitacao.status = "pendentes";

    solicitacao.salvar(function(retorno) {
      if (retorno.erro) {
        res.send(retorno.mensagem);
      } else {
        res.send(retorno.mensagem);
      }
    });    
  }, 
};

module.exports = SolicitacaoController;
