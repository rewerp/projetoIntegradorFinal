import { UsuariosDatabase } from './usuariosdb.js';

export class Usuarios {
  async usuariosPost(request, response) {
    const database = new UsuariosDatabase();
    const usuario = request.body;

    try {
      await database.create({
        email: usuario.email,
        senha: usuario.senha,
        nome: usuario.nome,
        cpf: usuario.cpf,
        dataNascimento: usuario.dataNascimento,
        endereco: usuario.endereco,
        cidade: usuario.cidade,
        numero: usuario.numero,
        cep: usuario.cep,
        telefone: usuario.telefone
      });

      return response.status(201).send({ mensagem: "Usuário cadastrado com sucesso." });
    } catch (error) {
      const erroJSON = {
        mensagem: "E-mail ou CPF já cadastrado.",
        detalhes: error.message
      }

      return response.status(409).send(erroJSON);
    }
  };

  async usuariosGet(request, response) {
    const database = new UsuariosDatabase();
    const usuarioId = request.params.id;
    const usuarios = await database.list(usuarioId);

    return response.status(200).send(usuarios);
  };

  async usuariosPut(request, response) {
    const database = new UsuariosDatabase();
    const usuarioId = request.params.id;
    const usuario = request.body;

    console.log(usuario);

    await database.update(usuarioId, {
      email: usuario.email,
      senha: usuario.senha,
      nome: usuario.nome,
      cpf: usuario.cpf,
      dataNascimento: usuario.dataNascimento,
      endereco: usuario.endereco,
      cidade: usuario.cidade,
      numero: usuario.numero,
      cep: usuario.cep,
      telefone: usuario.telefone
    });

    return response.status(200).send({ mensagem: "Usuário alterado com sucesso." });
  };

  async usuariosDelete(request, response) {
    const database = new UsuariosDatabase();
    const usuarioId = request.params.id;

    await database.delete(usuarioId);

    return response.status(200).send({ mensagem: "Usuário excluído com sucesso." });
  };
};