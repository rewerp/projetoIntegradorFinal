import { SolicitacoesDatabase } from './solicitacoesdb.js';

export class Solicitacoes {
  async solicitacoesPost(request, response) {
    const database = new SolicitacoesDatabase();
    const usuario = request.body;
    let retorno;

    try {
      await database.create({
        email: usuario.email,
        senha: usuario.senha,
        nome: usuario.nome,
        cpf: usuario.cpf,
        dataNascimento: usuario.dataNascimento,
        endereco: usuario.endereco,
        numero: usuario.numero,
        cep: usuario.cep,
        telefone: usuario.telefone
      });

      retorno = { "mensagem": "Usuário cadastrado com sucesso." }
    } catch {
      retorno = { "mensagem": "Usuário já cadastrado." }
    }

    return response.status(201).send(retorno);
  };

  async solicitacoesGet(request, response) {
    const database = new SolicitacoesDatabase();
    const search = request.query.search;
    const usuarios = await database.list(search);

    return response.status(200).send(usuarios);
  };

  async solicitacoesPut(request, response) {
    const database = new SolicitacoesDatabase();
    const usuarioId = request.params.id;
    const usuario = request.body;

    await database.update(usuarioId, {
      email: usuario.email,
      senha: usuario.senha,
      nome: usuario.nome,
      cpf: usuario.cpf,
      dataNascimento: usuario.dataNascimento,
      endereco: usuario.endereco,
      numero: usuario.numero,
      cep: usuario.cep,
      telefone: usuario.telefone
    });

    return response.status(200).send({ "mensagem": "Usuário alterado com sucesso." });
  };

  async solicitacoesDelete(request, response) {
    const database = new SolicitacoesDatabase();
    const usuarioId = request.params.id;

    await database.delete(usuarioId);

    return response.status(200).send({ "mensagem": "Usuário excluído com sucesso." });
  };
};