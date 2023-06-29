const { Books } = require("../models");

const createBook = async (library, book) => {
  try {
    const newBook = await Books.create({ ...book, LibraryId: library });
    console.log(newBook);
    return newBook;
  } catch (err) {
    console.error("Error when creating Book", err);
    throw err;
  }
};

const getBook = async (bookId) => {
  try {
    const book = await Books.findByPk(bookId);
    return book;
  } catch (err) {
    console.error("Error when creating Book", err);
    throw err;
  }
};

module.exports = { createBook, getBook };
