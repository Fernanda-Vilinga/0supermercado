const fastify = require('fastify')({ logger: true });
const jwt = require('fastify-jwt');
require('dotenv').config(); // Carregar variáveis de ambiente

// Configuração do JWT usando variável de ambiente
fastify.register(jwt, { secret: process.env.JWT_SECRET || 'defaultsecret' }); // Usar variáveis de ambiente

// Rotas aqui...

// Iniciar servidor
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Servidor está rodando em  ${port}`)
})

start();
