import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: String,
  year: String,
});

export const Book = mongoose.model("book", bookSchema);
