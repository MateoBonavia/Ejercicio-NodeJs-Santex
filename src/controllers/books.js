const { bookServices } = require("../services");

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

module.exports = { createBook, getBook };
