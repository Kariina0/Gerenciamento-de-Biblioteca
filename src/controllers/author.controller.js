const Author = require("../models/author.model");

const createAuthor = async (req, res) => {
  try {
    const newAuthor = new Author(req.body);

    const savedAuthor = await newAuthor.save();

    return res.status(201).json(savedAuthor);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Erro ao cadastrar autor", error: error.message });
  }
};

const listAuthors = async (req, res) => {
  try {
    const authors = await Author.find();

    return res.status(200).json(authors);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao listar autores", error: error.message });
  }
};

module.exports = {
  createAuthor,
  listAuthors,
};
