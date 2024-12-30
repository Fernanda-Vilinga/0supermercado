const fastify = require('fastify')({ logger: true });
const jwt = require('fastify-jwt');
require('dotenv').config(); // Carregar variáveis de ambiente

// Configuração do JWT usando variável de ambiente
fastify.register(jwt, { secret: process.env.JWT_SECRET || 'defaultsecret' }); // Usar variáveis de ambiente

// Rotas aqui...

// Iniciar servidor
const start = async () => {
    try {
        const port = process.env.PORT || 3000;  // Usar PORT se definida, caso contrário, usar 3000
        await fastify.listen(port, '0.0.0.0'); // Configurar para escutar na interface pública
        fastify.log.info(`Servidor rodando em http://localhost:${port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
