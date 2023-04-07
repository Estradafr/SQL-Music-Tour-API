// DEPENDENCIES
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI);
try {
  sequelize.authenticate();
  console.log("Connection to postgres established successfully.");
} catch (err) {
  console.log("Unable to connect to the database:", err);
}

// ROOT
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tour API",
  });
});

// LISTEN
app.listen(PORT, () => {
  console.log(`FRAKENSTEIN, IT'S ALIVE ON PORT: ${PORT}!`);
});
