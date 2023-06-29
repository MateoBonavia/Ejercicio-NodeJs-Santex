const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexion a la base de datos extablecida");
    await sequelize.sync({ force: false });
  } catch (err) {
    console.error("Error al inicializar la base de datos", err);
  }
};

module.exports = { sequelize, initializeDB };
