import { AutenticacaoDatabase } from './autenticacaodb.js';

export class Autenticacao {
  async autenticarUsuario(request, response) {
    const database = new AutenticacaoDatabase();
    const autenticacao = request.body;
    
    const usuario = await database.list({
      email: autenticacao.email,
      senha: autenticacao.senha,
    });

    return response.status(200).send(usuario);
  };
};