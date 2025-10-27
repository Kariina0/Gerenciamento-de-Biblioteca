// 1. Importar os módulos
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// 2. Iniciar o aplicativo Express
const app = express();
const port = process.env.PORT || 3000;

// 4. rota de teste
app.get("/", (req, res) => {
  res.send("API da Biblioteca está funcionando!");
});

// 5. Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
