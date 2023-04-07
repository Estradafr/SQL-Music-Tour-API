// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize, Model, DataTypes } = require('sequelize');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const PG_URI = process.env.PG_URI;

// CONFIGURATION / MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(PG_URI);
try {
  sequelize.authenticate();
  console.log('Connected to postgres');
} catch (err) {
  console.log('Unable to connect to the database:', err);
}

// ROOT
app.get('/', (req, res) => {
  try {
    res.status(200).json({
      message: 'Welcome to the Tour API',
    });
  } catch (err) {
    // 404 Page
    app.get('*', (req, res) => {
      res.send('404');
    });
  }
});

// LISTEN
app.listen(PORT, () => {
  console.log(`FRAKENSTEIN, IT'S ALIVE ON PORT: ${PORT}!`);
});
