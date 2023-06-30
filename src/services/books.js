const { bookProvider } = require("../providers");

const createBook = async (library, book) => {
  const newBook = await bookProvider.createBook(library, book);
  return newBook;
};

const getBook = async (bookId) => {
  const book = await bookProvider.getBook(bookId);
  return book;
};

const getBooks = async () => {
  const books = await bookProvider.getBooks();
  return books;
};

const updateBook = async (bookId, updates) => {
  const bookUpdated = bookProvider.updateBook(bookId, updates);
  return bookUpdated;
};

const deleteBook = async (bookId) => {
  await bookProvider.deleteBook(bookId);
  return;
};

module.exports = { createBook, getBook, getBooks, updateBook, deleteBook };
