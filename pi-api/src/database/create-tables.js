import { sql } from './db.js';

export async function criarTabelas() {
  await sql`
  CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    data_nascimento DATE,
    endereco VARCHAR(255),
    numero VARCHAR(10),
    cep VARCHAR(10),
    telefone VARCHAR(15)
);
  `.then(() => {
    console.log('Tabela "USUARIOS" criada com sucesso!');
  });

  await sql`
    CREATE TABLE IF NOT EXISTS solicitacoes (
      id serial PRIMARY KEY,
      usuario_id integer REFERENCES usuarios(id),
      tipo_servico VARCHAR(255) NOT NULL,
      endereco VARCHAR(255),
      cep VARCHAR(8),
      status VARCHAR(50)
    );
  `.then(() => {
    console.log('Tabela "SOLICITACOES" criada com sucesso!');
  });
};