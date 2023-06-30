const { libraryServices } = require("../services");
const { bookServices } = require("../services");

const createLibrary = async (req, res) => {
  try {
    const newLibrary = await libraryServices.createLibrary(req.body);
    res.json(newLibrary);
  } catch (err) {
    res.status(500).json({ action: "createLibrary", error: err.message });
  }
};

const getLibraries = async (req, res) => {
  try {
    const libraries = await libraryServices.getLibraries();
    res.json(libraries);
  } catch (err) {
    res.status(500).json({ action: "getLibraries", error: err.message });
  }
};

const getLibrary = async (req, res) => {
  try {
    const library = await libraryServices.getLibrary(req.params.libraryId);
    if (!library) {
      res
        .status(404)
        .json({ action: "getLibrary", error: "Library not found" });
    } else {
      res.json(library);
    }
  } catch (err) {
    res.status(500).json({ action: "getLibrary", error: err.message });
  }
};

const updateLibrary = async (req, res) => {
  try {
    if (req.params.libraryId && req.body) {
      const libraryUpdated = await libraryServices.updateLibrary(
        req.params.libraryId,
        req.body
      );
      res.json(libraryUpdated);
    } else {
      res
        .status(500)
        .json({ action: "putLibrary", error: "ID and Updates nedeed" });
    }
  } catch (err) {
    res.status(500).json({ action: "putLibrary", error: err.message });
  }
};

const postBook = async (req, res) => {
  try {
    const newBook = await bookServices.createBook(
      req.params.libraryId,
      req.body
    );
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ action: "createBook", error: err.message });
  }
};

const deleteLibrary = async (req, res) => {
  try {
    const library = await libraryServices.getLibrary(req.params.libraryId);
    if (!library) {
      res
        .status(404)
        .json({ action: "deleteLibrary", error: "No library with that ID" });
    } else {
      await libraryServices.deleteLibrary(req.params.libraryId);
      res.send("The library was successfully deleted");
    }
  } catch (err) {
    res.status(500).json({ action: "deleteLibrary", error: err.message });
  }
};

module.exports = {
  createLibrary,
  getLibrary,
  getLibraries,
  updateLibrary,
  postBook,
  deleteLibrary,
};
