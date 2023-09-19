const Solicitacao = require("../models/solicitacao");
var Usuario = require("../models/usuario");

var UsuariosController = {
  index: function (req, res, next) {
    new Usuario({ id: req.usuarioLogado.id }).buscar(function (usuario) {     
      if (usuario.erro !== undefined) {
        res.redirect("/login");
      } else {       
        usuario.data_nascimento = usuario.data_nascimento.split("T")[0];

        Solicitacao.todos(function (solicitacoes) {
          usuario.solicitacoes = [];
          solicitacoes.forEach(data => {            
            if(data.usuario_id == usuario.id){              
              usuario.solicitacoes.push(data);
            }        
          });  
          
          res.render("usuarios/index", { 
            title: "trazer os dados da API",
            usuario: usuario 
          });
        });        
      }  
    });
  },

  novo: function (req, res, next) {
    var erro = req.query.erro;
    if (erro === undefined) {
      erro = "";
    }
    res.render("usuarios/novo", { erro: erro });
  },

  cadastrar: function (req, res, next) {
    var usuario = new Usuario();
    usuario.email = req.body.email;  
    usuario.senha = req.body.senha; 
    usuario.nome = req.body.nome;
    usuario.cpf = req.body.cpf;
    usuario.dataNascimento = req.body.dataNascimento;
    usuario.endereco = req.body.endereco;
    usuario.cidade = req.body.cidade;
    usuario.numero = req.body.numero;
    usuario.cep = req.body.cep;
    usuario.telefone = req.body.celular;

    usuario.salvar(function (retorno) {
      if (retorno.erro) {
        res.redirect("/usuarios/?erro=" + retorno.mensagem);
      } else {
        res.redirect("/login");
      }
    });
  },

  editar: function (req, res, next) {
    Usuario.todos(function (usuarios) {
      var usuario;
      usuarios.forEach(element => {
        if(element.id == req.usuarioLogado.id){
          usuario = element
        }        
      });     

      if (usuario.erro !== undefined) {
        res.redirect("/usuarios/alterar?erro=" + usuario.mensagem);
      } else {
        res.render("usuarios/alterar", { usuario: usuario });
      }
    });
    res.render("usuarios/alterar", { usuario: "" });
  },

  atualizar: function (req, res, next) {
    var usuario = new Usuario();    
    usuario.id = req.params.id;
    usuario.email = req.body.email;  
    usuario.senha = req.usuarioLogado.senha; 
    usuario.nome = req.body.nome;
    usuario.cpf = req.body.cpf;
    usuario.dataNascimento = req.body.dataNascimento;
    usuario.endereco = req.body.endereco;
    usuario.cidade = req.body.cidade;
    usuario.numero = req.body.numero;
    usuario.cep = req.body.cep;
    usuario.telefone = req.body.celular;

    usuario.salvar(function (retorno) {
      if (retorno.erro) {
        //res.redirect("/usuarios/novo?erro=" + retorno.mensagem);
        res.send(retorno.mensagem);
      } else {
        res.send(retorno);
      }
    });
  },

  excluir: function (req, res, next) {
    var usuario = new Usuario();
    usuario.id = req.params.id;
    usuario.excluir(function (retorno) {
      if (retorno.erro) {
        res.redirect("/usuarios/novo?erro=" + retorno.mensagem);
      } else {
        res.redirect("/usuarios");
      }
    });
  },
};

module.exports = UsuariosController;