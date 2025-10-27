const Book = require("../models/book.model");
const Author = require("../models/author.model"); // Precisamos do modelo Author para validar a referência

const createBook = async (req, res) => {
  try {
    const { author } = req.body;

    const existingAuthor = await Author.findById(author);
    if (!existingAuthor) {
      return res
        .status(404)
        .json({
          message: "Autor não encontrado. Não é possível cadastrar o livro.",
        });
    }

    const newBook = new Book(req.body);
    const savedBook = await newBook.save();

    return res.status(201).json(savedBook);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Erro ao cadastrar livro", error: error.message });
  }
};

const listBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("author", "name birthDate");

    return res.status(200).json(books);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao listar livros", error: error.message });
  }
};

module.exports = {
  createBook,
  listBooks,
};
