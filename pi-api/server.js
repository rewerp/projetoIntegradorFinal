import { fastify } from 'fastify';
import { criarTabelas } from './src/database/create-tables.js';
import { Usuarios } from './src/usuarios/usuarios.js';
import { Autenticacao } from './src/autenticacao/autenticacao.js';

const server = fastify();
const usuarios = new Usuarios();
const autenticacao = new Autenticacao();

criarTabelas();

server.post('/autenticacao', (request, response) => { autenticacao.autenticarUsuario(request, response); return response; });

server.post('/usuarios', (request, response) => { usuarios.usuarioPost(request, response); return response; });
server.get('/usuarios', (request, response) => { usuarios.usuariosGet(request, response); return response; });
server.put('/usuarios/:id', (request, response) => { usuarios.usuariosPut(request, response); return response; });
server.delete('/usuarios/:id', (request, response) => { usuarios.usuariosDelete(request, response); return response; });

server.post('/solicitacoes', (request, response) => { usuarios.usuarioPost(request, response); return response; });
server.get('/solicitacoes', (request, response) => { usuarios.usuariosGet(request, response); return response; });
server.put('/solicitacoes/:id', (request, response) => { usuarios.usuariosPut(request, response); return response; });
server.delete('/solicitacoes/:id', (request, response) => { usuarios.usuariosDelete(request, response); return response; });

server.listen({
  port: 3333
});