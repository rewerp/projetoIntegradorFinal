import { sql } from '../database/db.js';

export class SolicitacoesDatabase {
  #usuarios = new Map();

  async list() {
    let solicitacoes;

    solicitacoes = await sql`select * from solicitacoes`;

    return solicitacoes;
  }

  async create(solicitacao) {
    const { usuarioId, tipoServico, endereco, cep, status } = solicitacao;
    let detalhes
    
    await sql`insert into solicitacoes (usuario_id, tipo_servico, endereco, cep, status) 
              values (${usuarioId}, ${tipoServico}, ${endereco}, ${cep}, ${status})`;

    detalhes = await sql`select id from solicitacoes order by id desc limit 1`;

    return detalhes[0];
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