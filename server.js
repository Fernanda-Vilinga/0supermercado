const express = require('express');
require('dotenv').config(); // Carregar variáveis de ambiente

const app = express();
const port = process.env.PORT || 4000;  // Usar a porta fornecida pelo Render

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Iniciar servidor na interface pública (0.0.0.0) para ser acessível externamente
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor está rodando em http://0.0.0.0:${port}`);
});
