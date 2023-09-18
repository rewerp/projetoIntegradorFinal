import { sql } from '../database/db.js';

export class AutenticacaoDatabase {
  #usuario = new Map();

  async list(autenticacao) {
    let usuario = await sql`select * from usuarios where email = ${autenticacao.email} and senha = ${autenticacao.senha}`;

    return (usuario);
  }
};