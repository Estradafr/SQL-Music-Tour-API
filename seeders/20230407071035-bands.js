'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bands', [
      {
        name: "Guns N' Roses",
        genre: 'Rock',
        available_start_time: '2023-06-20 14:00:00-07',
        end_time: '2023-06-22 16:00:00-07',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('bands', null, {});
  },
};
