const { libraryServices } = require("../services");

const createLibrary = async (req, res) => {
  try {
    const newLibrary = await libraryServices.createLibrary(req.body);
    res.json(newLibrary);
  } catch (err) {
    res.status(500).json({ action: "createLibrary", error: err.message });
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

module.exports = { createLibrary, getLibrary };
