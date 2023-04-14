'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stage_events', [
      {
        stage_events_id: 1,
        stage_id: 3,
        event_id: 1,
      },
      {
        stage_events_id: 2,
        stage_id: 3,
        event_id: 2,
      },
      {
        stage_events_id: 3,
        stage_id: 4,
        event_id: 1,
      },
      {
        stage_events_id: 4,
        stage_id: 4,
        event_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stage_events', null, {});
  },
};
