var Usuario = require("../models/usuario");

var UsuariosController = {
  index: function (req, res, next) {
    // Usuario.todos(function (usuarios) {
    //   res.render("./usuarios/index", {
    //     title: "trazer os dados da API",
    //     usuarios: usuarios,
    //   });
    // });

    res.render("./usuarios/index", {
      title: "trazer os dados da API",
      usuarios: "",
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
    usuario.nome = req.body.nome;
    usuario.cpf = req.body.cpf;
    usuario.dataNascimento = req.body.dataNascimento;
    usuario.endereco = req.body.endereco;
    usuario.numero = req.body.numero;
    usuario.cep = req.body.cep;
    usuario.ddd = req.body.ddd;
    usuario.celular = req.body.celular;
    usuario.email = req.body.email;    
    usuario.senha = req.body.senha;
    usuario.salvar(function (retorno) {
      if (retorno.erro) {
        res.redirect("/usuarios/novo?erro=" + retorno.mensagem);
      } else {
        res.redirect("/usuarios");
      }
    });
  },

  editar: function (req, res, next) {
    // new Usuario({ id: req.params.id }).buscar(function (usuario) {
    //   if (usuario.erro !== undefined) {
    //     res.redirect("/usuarios/alterar?erro=" + usuario.mensagem);
    //   } else {
    //     res.render("usuarios/alterar", { usuario: usuario });
    //   }
    // });
    res.render("usuarios/alterar", { usuario: "" });
  },

  atualizar: function (req, res, next) {
    var usuario = new Usuario();
    usuario.id = req.params.id;
    usuario.nome = req.body.nome;
    usuario.login = req.body.login;
    usuario.senha = req.body.senha;
    usuario.email = req.body.email;
    usuario.salvar(function (retorno) {
      if (retorno.erro) {
        res.redirect("/usuarios/novo?erro=" + retorno.mensagem);
      } else {
        res.redirect("/usuarios");
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