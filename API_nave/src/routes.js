const express = require('express');
const routes = express.Router();

// importando o controle para que seja possível usar os métodos do controle
const postsController = require('./controllers/postsController');

// rotas
routes.get('/posts', postsController.index); // para listar os posts 
routes.post('/posts', postsController.criandoPost); // para criar um post

module.exports = routes;

