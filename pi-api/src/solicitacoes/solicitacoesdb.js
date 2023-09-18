import { sql } from '../database/db.js';

export class SolicitacoesDatabase {
  #usuarios = new Map();

  async list(search) {
    let solicitacoes;

    if (search) {
      solicitacoes = await sql`select * from solicitacoes where id = ${search}`;
    } else {
      solicitacoes = await sql`select * from solicitacoes`;
    }

    return solicitacoes;
  }

  async create(solicitacao) {
    const { usuarioId, tipoServico, endereco, cep, status } = solicitacao;

    await sql`insert into solicitacoes (usuario_id, tipo_servico, endereco, cep, status) 
              values (${usuarioId}, ${tipoServico}, ${endereco}, ${cep}, ${status})`;
  };

  async update(id, solicitacao) {
    const { usuarioId, tipoServico, endereco, cep, status } = solicitacao;

    await sql`update solicitacoes set usuario_id = ${usuarioId}, tipo_servico = ${tipoServico}, 
              endereco = ${endereco}, cep = ${cep}, status = ${status}
              where id = ${id}`;
  };

  async delete(id) {
    await sql`delete from solicitacoes where id = ${id}`;
  }
};