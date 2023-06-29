'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ExchangeRates', [{
      currencyId: 1,
      rate: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      currencyId: 2,
      rate: 0.0281286,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      currencyId: 3,
      rate: 0.0257941,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ExchangeRates', null, {});
  }
};
