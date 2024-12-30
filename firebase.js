const admin = require('firebase-admin');
require('dotenv').config();  // Carregar as variáveis de ambiente

// A chave de serviço Firebase será obtida através de uma variável de ambiente
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
