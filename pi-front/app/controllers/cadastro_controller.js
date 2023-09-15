var CadastroController = {
  index: function (req, res, next) {
    res.render("cadastro/index", { title: "Cadastro" });
  },
};

module.exports = CadastroController;
