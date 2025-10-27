const Book = require("../models/book.model");
const User = require("../models/user.model");
const Loan = require("../models/loan.model");
const mongoose = require("mongoose");

const createLoan = async (req, res) => {
  return res.status(501).json({
    message:
      "Endpoint de empréstimo em desenvolvimento. Favor implementar a lógica de negócio.",
  });
};

module.exports = {
  createLoan,
};
