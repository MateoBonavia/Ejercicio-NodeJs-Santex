const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const Books = require("./books");

const Library = sequelize.define(
  "Library",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.STRING,
    },
  },

  {
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
    // hooks: {
    //   afterDestroy: function (instance, options) {
    //     instance.getLibrary().then((library) => library.destroy());
    //   },
    //   afterRestore: function (instance, options) {
    //     instance
    //       .getLibrary({ paranoid: false })
    //       .then((library) => library.restore());
    //   },
    // },
  }
);

Library.hasMany(Books, {
  onDelete: "CASCADE",
});
Books.belongsTo(Library);

module.exports = Library;
