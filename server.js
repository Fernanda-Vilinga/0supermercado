const express = require('express');
const jwt = require('express-jwt');
require('dotenv').config(); // Carregar variáveis de ambiente

const app = express();
const port = process.env.PORT || 4000;

// Configuração do JWT usando variável de ambiente
app.use(jwt({ secret: process.env.JWT_SECRET || 'defaultsecret', algorithms: ['HS256'] }).unless({ path: ['/'] }));


// Iniciar servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor está rodando em http://0.0.0.0:${port}`);
});
