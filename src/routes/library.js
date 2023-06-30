const express = require("express");
const router = express.Router();
const { libraryController } = require("../controllers");

router.post("/", libraryController.createLibrary);

router.get("/", libraryController.getLibraries);

router.get("/:libraryId", libraryController.getLibrary);

router.put("/:libraryId", libraryController.updateLibrary);

router.post("/:libraryId", libraryController.postBook);

module.exports = router;
