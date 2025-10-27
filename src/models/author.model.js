const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },

    sex: {
      type: String,
      required: true,
    },
    writingGenre: {
      type: String,
      required: true,
      enum: ["Novel", "Poetry", "Fantasy", "Fiction", "Mystery", "Suspense"], // 'enum' restringe os valores
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Author", authorSchema);
