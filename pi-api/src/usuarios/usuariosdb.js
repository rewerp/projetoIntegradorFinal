import { sql } from '../database/db.js';

export class UsuariosDatabase {
  #usuarios = new Map();

  async list(search) {
    let usuarios;

    if (search) {
      usuarios = await sql`select * from usuarios where id = ${search}`;
    } else {
      usuarios = await sql`select * from usuarios`;
    }

    return usuarios;
  }

  async create(usuario) {
    const { email, senha, nome, cpf, dataNascimento, endereco, numero, cep, telefone } = usuario;

    await sql`insert into usuarios (email, senha, nome, cpf, data_nascimento, endereco, numero, cep, telefone) 
              values (${email}, ${senha}, ${nome}, ${cpf}, ${dataNascimento}, ${endereco}, ${numero}, ${cep}, ${telefone})`;
  };

  async update(id, usuario) {
    const { email, senha, nome, cpf, dataNascimento, endereco, numero, cep, telefone } = usuario;

    await sql`update usuarios set 
              email = ${email}, senha = ${senha}, nome = ${nome}, cpf = ${cpf}, data_nascimento = ${dataNascimento}, 
              endereco = ${endereco}, numero = ${numero}, cep = ${cep}, telefone = ${telefone} 
              where id = ${id}`;
  };

  async delete(id) {
    await sql`delete from usuarios where id = ${id}`;
  }
};