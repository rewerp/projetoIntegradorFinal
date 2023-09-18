import { fastify } from 'fastify';
import { criarTabelas } from './src/database/create-tables.js';
import { Usuarios } from './src/usuarios/usuarios.js';
import { Autenticacao } from './src/autenticacao/autenticacao.js';
import { Solicitacoes } from './src/solicitacoes/solicitacoes.js';

const server = fastify();
const autenticacao = new Autenticacao();
const usuarios = new Usuarios();
const solicitacoes = new Solicitacoes();

criarTabelas();

server.post('/autenticacao', (request, response) => { autenticacao.autenticarUsuario(request, response); return response; });

server.post('/usuarios', (request, response) => { usuarios.usuariosPost(request, response); return response; });
server.get('/usuarios', (request, response) => { usuarios.usuariosGet(request, response); return response; });
server.get('/usuarios/:id', (request, response) => { usuarios.usuariosGet(request, response); return response; });
server.put('/usuarios/:id', (request, response) => { usuarios.usuariosPut(request, response); return response; });
server.delete('/usuarios/:id', (request, response) => { usuarios.usuariosDelete(request, response); return response; });

server.post('/solicitacoes', (request, response) => { solicitacoes.solicitacoesPost(request, response); return response; });
server.get('/solicitacoes', (request, response) => { solicitacoes.solicitacoesGet(request, response); return response; });
server.put('/solicitacoes/:id', (request, response) => { solicitacoes.solicitacoesPut(request, response); return response; });
server.delete('/solicitacoes/:id', (request, response) => { solicitacoes.solicitacoesDelete(request, response); return response; });

server.listen({
  port: 3333
});