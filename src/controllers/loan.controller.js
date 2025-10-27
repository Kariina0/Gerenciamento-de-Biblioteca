const Book = require("../models/book.model");
const User = require("../models/user.model");
const Loan = require("../models/loan.model");

const createLoan = async (req, res) => {
  try {
    const { bookId, userId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado." });
    }

    const today = new Date();
    let isLoanPossible = book.isAvailable;

    if (
      !isLoanPossible &&
      book.expectedReturnDate &&
      book.expectedReturnDate < today
    ) {
      isLoanPossible = true;
    }

    if (!isLoanPossible) {
      return res.status(400).json({
        message: "O livro já se encontra emprestado.",
        expectedReturnDate: book.expectedReturnDate,
      });
    }

    const expectedReturnDate = new Date();
    expectedReturnDate.setDate(today.getDate() + 3);

    book.isAvailable = false;
    book.expectedReturnDate = expectedReturnDate;
    await book.save();

    const newLoan = new Loan({
      user: user.name,
      book: book.title,
      loanDate: today.toISOString(),
      returnDate: expectedReturnDate.toISOString(),
    });

    const savedLoan = await newLoan.save();

    return res.status(201).json({
      message: "Empréstimo realizado com sucesso!",
      loan: savedLoan,
      bookStatus: book,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao realizar empréstimo", error: error.message });
  }
};

module.exports = {
  createLoan,
};
