const { Library } = require("../models");

const createLibrary = async (library) => {
  console.log(library);
  try {
    const newLibrary = await Library.create(library);
    return newLibrary;
  } catch (err) {
    console.error("Error when creating Library", err);
    throw err;
  }
};

const getLibraries = async () => {
  try {
    const libraries = await Library.findAll();
    return libraries;
  } catch (err) {
    console.error("Error when fetching libraries");
    throw err;
  }
};

const getLibrary = async (libraryId) => {
  try {
    const library = await Library.findByPk(libraryId, {
      include: { all: true },
    });
    return library;
  } catch (err) {
    console.error("Error when fetching Library", err);
    throw err;
  }
};

const updateLibrary = async (libraryId, updates) => {
  try {
    if (updates.name) {
      await Library.update(
        { name: updates.name },
        { where: { id: libraryId } }
      );
    } else if (updates.location) {
      await Library.update(
        { location: updates.location },
        { where: { id: libraryId } }
      );
    } else {
      await Library.update(
        { phone: updates.phone },
        { where: { id: libraryId } }
      );
    }

    await Library.update({ updates }, { where: { id: libraryId } });
    const libraryUpdapted = await getLibrary(libraryId);
    return libraryUpdapted;
  } catch (err) {
    console.error("Error when updating Library", err);
    throw err;
  }
};

const deleteLibrary = async (libraryId) => {
  try {
    await Library.destroy({
      where: {
        id: libraryId,
      },
    });
    return;
  } catch (err) {
    console.error("Error when deleting library", err);
    throw err;
  }
};

module.exports = {
  createLibrary,
  getLibrary,
  getLibraries,
  updateLibrary,
  deleteLibrary,
};
