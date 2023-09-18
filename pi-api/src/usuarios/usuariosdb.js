import { sql } from '../database/db.js';

export class UsuariosDatabase {
  #usuarios = new Map();

  async list(usuarioId) {
    let usuarios;

    if (usuarioId) {
      usuarios = await sql`select * from usuarios where id = ${usuarioId}`;

      return usuarios[0];
    } else {
      usuarios = await sql`select * from usuarios`;

      return usuarios;
    }
  }

  async create(usuario) {
    const { email, senha, nome, cpf, dataNascimento, endereco, cidade, numero, cep, telefone } = usuario;

    await sql`insert into usuarios (email, senha, nome, cpf, data_nascimento, endereco, cidade, numero, cep, telefone) 
              values (${email}, ${senha}, ${nome}, ${cpf}, ${dataNascimento}, ${endereco}, ${cidade}, ${numero}, ${cep}, ${telefone})`;
  };

  async update(id, usuario) {
    const { email, senha, nome, cpf, dataNascimento, endereco, cidade, numero, cep, telefone } = usuario;

    await sql`update usuarios set email = ${email}, senha = ${senha}, nome = ${nome}, cpf = ${cpf}, data_nascimento = ${dataNascimento}, 
              endereco = ${endereco}, cidade = ${cidade}, numero = ${numero}, cep = ${cep}, telefone = ${telefone} 
              where id = ${id}`;
  };

  async delete(id) {
    await sql`delete from usuarios where id = ${id}`;
  }
};