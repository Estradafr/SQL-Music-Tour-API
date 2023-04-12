'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adds the recommendation column, to the bands table with a data type of string
    // You'd push this to pgAdmin with ❯ sequelize db:migrate
    await queryInterface.addColumn('bands', 'recommendation', {
      type: DataTypes.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    // Removes the recommendation column from the bands table
    // You'd do this with ❯ sequelize db:migrate:undo
    await queryInterface.removeColumn('bands', 'recommendation');
  },
};
