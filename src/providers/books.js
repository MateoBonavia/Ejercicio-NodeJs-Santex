const { Books } = require("../models");

const createBook = async (library, book) => {
  try {
    const newBook = await Books.create({ ...book, LibraryId: library });
    return newBook;
  } catch (err) {
    console.error("Error when creating Book", err);
    throw err;
  }
};

const getBook = async (bookId) => {
  try {
    const book = await Books.findByPk(bookId, {
      include: { all: true },
    });
    return book;
  } catch (err) {
    console.error("Error when creating Book", err);
    throw err;
  }
};

const getBooks = async () => {
  try {
    const books = await Books.findAll({
      include: { all: true },
    });
    return books;
  } catch (err) {
    console.error("Error when creating Book", err);
    throw err;
  }
};

const updateBook = async (bookId, updates) => {
  try {
    if (updates.isbn) {
      await Books.update({ isbn: updates.isbn }, { where: { id: bookId } });
    } else if (updates.title) {
      await Books.update({ title: updates.title }, { where: { id: bookId } });
    } else if (updates.autor) {
      await Books.update({ autor: updates.autor }, { where: { id: bookId } });
    } else if (updates.year) {
      await Books.update({ year: updates.year }, { where: { id: bookId } });
    }
    const bookUpdated = getBook(bookId);
    return bookUpdated;
  } catch (err) {
    console.error("Error when updatin book");
  }
};

const deleteBook = async (bookId) => {
  try {
    await Books.destroy({
      where: {
        id: bookId,
      },
    });
    return;
  } catch (err) {
    console.error("Error when deleting book", err);
    throw err;
  }
};

module.exports = { createBook, getBook, getBooks, updateBook, deleteBook };
