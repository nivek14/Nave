// importando bibliotecas
const express = require('express');
const mongoose = require('mongoose');
//const requireDir = require('require-dir');

// Sets necessários para que o mongoose funcione 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// iniciando aplicação
const app = express();
app.use(express.json()); // permitir o envio de dados no formato json

// iniciando banco de dados
mongoose.connect('mongodb://localhost:27017/nave');
require('./src/models/posts');

// usando rotas
app.use('/api', require('./src/routes'));

app.listen(3002);
