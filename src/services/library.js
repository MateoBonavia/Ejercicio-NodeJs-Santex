const { libraryProvider } = require("../providers");

const createLibrary = async (library) => {
  const newLibrary = await libraryProvider.createLibrary(library);
  return newLibrary;
};

const getLibraries = async () => {
  const libraries = await libraryProvider.getLibraries();
  return libraries;
};

const getLibrary = async (libraryId) => {
  const library = await libraryProvider.getLibrary(libraryId);
  return library;
};

const updateLibrary = async (libraryId, updates) => {
  const libraryUpdated = await libraryProvider.updateLibrary(
    libraryId,
    updates
  );
  return libraryUpdated;
};

module.exports = { createLibrary, getLibrary, getLibraries, updateLibrary };
