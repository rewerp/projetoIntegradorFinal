import { SolicitacoesDatabase } from './solicitacoesdb.js';

export class Solicitacoes {
  async solicitacoesPost(request, response) {
    const database = new SolicitacoesDatabase();
    const solicitacao = request.body;

    try {
      const detalhes = await database.create({
        usuarioId: solicitacao.usuarioId,
        tipoServico: solicitacao.tipoServico,
        endereco: solicitacao.endereco,
        cep: solicitacao.cep,
        status: solicitacao.status
      });

      return response.status(201).send({ mensagem: "Solicitação cadastrada com sucesso.", detalhes });
    } catch (error) {
      const erroJSON = {
        mensagem: "Ocorreu um erro ao cadastrar a solicitação.",
        detalhes: error.message
      }

      return response.status(409).send(erroJSON);
    }
  };

  async solicitacoesGet(request, response) {
    const database = new SolicitacoesDatabase();
    const solicitacoes = await database.list();

    return response.status(200).send(solicitacoes);
  };

  async solicitacoesPut(request, response) {
    const database = new SolicitacoesDatabase();
    const solicitacaoId = request.params.id;
    const solicitacao = request.body;

    await database.update(solicitacaoId, {
      usuarioId: solicitacao.usuarioId,
      tipoServico: solicitacao.tipoServico,
      endereco: solicitacao.endereco,
      cep: solicitacao.cep,
      status: solicitacao.status
    });

    return response.status(200).send({ mensagem: "Solicitação alterada com sucesso." });
  };

  async solicitacoesDelete(request, response) {
    const database = new SolicitacoesDatabase();
    const solicitacaoId = request.params.id;

    await database.delete(solicitacaoId);

    return response.status(200).send({ mensagem: "Solicitação excluída com sucesso." });
  };
};