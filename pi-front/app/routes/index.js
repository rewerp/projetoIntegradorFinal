var express = require('express');
var HomeController = require('../controllers/home_controller');
var LoginController = require('../controllers/login_controller');
var UsuariosController = require('../controllers/usuarios_controller');
var LoginUserMiddleware = require("../middleware/login");
var CadastroController = require('../controllers/cadastro_controller');
const SolicitacaoController = require('../controllers/solicitacao_controller');
var router = express.Router();

/* Rotas home page. */
router.get('/', HomeController.index);

/* Rotas User Login page. */
router.get('/login',  LoginController.index);
router.post('/login', LoginController.autenticar);
router.get('/logout',  LoginController.deslogar);

/* Rotas cadastro page. */
router.get('/cadastro',  CadastroController.index);

/* Rotas Solicitação page. */
router.get('/solicitar',  SolicitacaoController.index);
router.post('/solicitar/enviar',  SolicitacaoController.enviar);

/* Rotas Usuarios */
router.get('/usuarios', LoginUserMiddleware, UsuariosController.index);
//router.get('/usuarios',  UsuariosController.index);
router.get('/usuarios/novo', LoginUserMiddleware, UsuariosController.novo);
//router.post('/usuarios/cadastrar', LoginUserMiddleware, UsuariosController.cadastrar);
router.post('/usuarios/cadastrar', UsuariosController.cadastrar);
//router.get('/usuarios/:id/editar', LoginUserMiddleware, UsuariosController.editar);
router.get('/usuarios/editar',  UsuariosController.editar);
router.post('/usuarios/:id/atualizar', LoginUserMiddleware, UsuariosController.atualizar);
router.get('/usuarios/:id/excluir', LoginUserMiddleware, UsuariosController.excluir);

module.exports = router;
