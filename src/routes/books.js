const express = require("express");
const router = express.Router();
const { bookController } = require("../controllers");

router.post("/:library?", bookController.createBook);

router.get("/book/:bookId", bookController.getBook);

router.get("/", bookController.getBooks);

router.put("/book/:bookId", bookController.updateBook);

router.delete("/book/:bookId", bookController.deleteBook);

module.exports = router;
