const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loanSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    book: {
      type: String,
      required: true,
    },
    loanDate: {
      type: String,
      required: true,
    },
    returnDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Loan", loanSchema);
