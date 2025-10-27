require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("Conectado ao MongoDB com sucesso!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

app.use(express.json());

require("./models/author.model");
require("./models/user.model");
require("./models/book.model");
require("./models/loan.model");

const userRoutes = require("./routes/user.routes");
const authorRoutes = require("./routes/author.routes");
const bookRoutes = require("./routes/book.routes");
const loanRoutes = require("./routes/loan.routes");

app.use("/users", userRoutes);
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/loans", loanRoutes);

app.get("/", (req, res) => {
  res.send("API da Biblioteca está funcionando!");
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
