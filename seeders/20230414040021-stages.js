'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stages', [
      {
        name: 'Indiana',
      },
      {
        name: 'South',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stages', null, {});
  },
};
