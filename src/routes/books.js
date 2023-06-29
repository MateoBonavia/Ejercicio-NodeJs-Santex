const express = require("express");
const router = express.Router();
const { bookController } = require("../controllers");

router.post("/:library?", bookController.createBook);

router.get("/book/:bookId", bookController.getBook);

module.exports = router;
