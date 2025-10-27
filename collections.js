require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

const cleanup = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Conectado ao MongoDB para limpeza.");

    const collections = Object.keys(mongoose.connection.collections);

    for (const collectionName of collections) {
      await mongoose.connection.collections[collectionName].drop();
      console.log(`Coleção '${collectionName}' excluída.`);
    }

    console.log(
      "Todas as coleções foram excluídas e recriadas (estrutura zerada)."
    );
    await mongoose.connection.close();
  } catch (error) {
    console.error("Erro ao limpar coleções:", error.message);
    // Não encerra o processo se a coleção não existir
    if (error.code !== 26) {
      process.exit(1);
    }
    await mongoose.connection.close();
  }
};

cleanup();
