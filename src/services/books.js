const { bookProvider } = require("../providers");

const createBook = async (library, book) => {
  const newBook = await bookProvider.createBook(library, book);
  return newBook;
};

const getBook = async (bookId) => {
  const book = await bookProvider.getBook(bookId);
  return book;
};

module.exports = { createBook, getBook };
