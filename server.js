const fastify = require('fastify')({ logger: true });
const jwt = require('fastify-jwt');
require('dotenv').config(); // Carregar variáveis de ambiente

// Configuração do JWT usando variável de ambiente
fastify.register(jwt, { secret: process.env.JWT_SECRET || 'defaultsecret' }); // Usar variáveis de ambiente

// Rotas aqui...

// Iniciar servidor
const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`Servidor rodando em http://localhost:3000`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
