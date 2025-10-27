// 1. Importar os módulos
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// 2. Iniciar o aplicativo Express
const app = express();
const port = process.env.PORT || 3000;

// 3. Conectar ao MongoDB
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// 4. Adicionar um "middleware"
app.use(express.json());

// 5. rota de teste
app.get('/', (req, res) => {
  res.send('API da Biblioteca está funcionando!');
});

// 6. Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});