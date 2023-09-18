import { AutenticacaoDatabase } from './autenticacaodb.js';

export class Autenticacao {
  async autenticarUsuario(request, response) {
    const database = new AutenticacaoDatabase();
    const autenticacao = request.body;

    const usuario = await database.list({
      email: autenticacao.email,
      senha: autenticacao.senha
    });

    if (usuario[0]) {
      return response.status(200).send(usuario);
    } else {
      return response.status(401).send({ "mensagem": "Usuário ou senha inválidos." });
    }
  };
};