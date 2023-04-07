// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const PG_URI = process.env.PG_URI;
const PG_PW = process.env.PG_PW;

// CONFIGURATION / MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SEQUELIZE CONNECTION
const sequelize = new Sequelize({
  storage: PG_URI,
  dialect: 'postgres',
  username: 'postgres',
  password: PG_PW,
});

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
