'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('event', [
      {
        name: 'EDC',
        date: '2023-06-22 00:00:00',
        start_time: '2023-06-22 20:00:00',
        end_time: '2023-06-22 23:00:00',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('event', null, {});
  },
};
