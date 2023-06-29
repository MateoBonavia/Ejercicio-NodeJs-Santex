const { libraryProvider } = require("../providers");

const createLibrary = async (library) => {
  const newLibrary = await libraryProvider.createLibrary(library);
  return newLibrary;
};

const getLibrary = async (libraryId) => {
  const library = await libraryProvider.getLibrary(libraryId);
  return library;
};

module.exports = { createLibrary, getLibrary };
