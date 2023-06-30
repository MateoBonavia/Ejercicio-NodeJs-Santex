const { bookServices, libraryServices } = require("../services");

const createBook = async (req, res) => {
  try {
    const newBook = await bookServices.createBook(
      req.params.library ? req.params.library : 0,
      req.body
    );
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ action: "createBook", error: err.message });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await bookServices.getBook(req.params.bookId);
    if (!book) {
      res.status(404).json({ action: "getBook", error: "Book not found" });
    } else {
      res.json(book);
    }
  } catch (err) {
    res.status(500).json({ action: "getBook", error: err.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await bookServices.getBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ action: "getBooks", error: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    if (req.params.bookId && req.body) {
      const bookUpdated = await bookServices.updateBook(
        req.params.bookId,
        req.body
      );
      res.json(bookUpdated);
    } else {
      res
        .status(500)
        .json({ action: "putBook", error: "ID and Updates nedeed" });
    }
  } catch (err) {
    res.status(500).json({ action: "putBook", error: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await bookServices.getBook(req.params.bookId);
    if (!book) {
      res
        .status(404)
        .json({ action: "deleteBook", error: "No book with that ID" });
    } else {
      await bookServices.deleteBook(req.params.bookId);
      res.send("The book was successfully deleted");
    }
  } catch (err) {
    res.status(500).json({ action: "deleteBook", error: err.message });
  }
};

module.exports = { createBook, getBook, getBooks, updateBook, deleteBook };
