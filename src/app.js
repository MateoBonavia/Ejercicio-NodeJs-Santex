const express = require("express");
const PORT = 8090;

const { libraryRouter, bookRouter } = require("./routes");
const loggingMdw = require("./middleware/logging");
const { initializeDB } = require("./config/db-config");
const { Library } = require("./models");

const app = express();

app.use(express.json());

app.use(loggingMdw);

app.use("/library", libraryRouter);
app.use("/books", bookRouter);

const errorHandler = (err, req, res, next) => {};

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in ${PORT}`);
});
