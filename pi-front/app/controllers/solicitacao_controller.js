var SolicitacaoController = {
  index: function (req, res, next) {
    res.render("solicitacao/index", { title: "Solicitação" });
  },
  enviar: function (req, res, next) {
    res.render("solicitacao/concluido", { title: "Formulario Enviado" });
  },
};

module.exports = SolicitacaoController;
