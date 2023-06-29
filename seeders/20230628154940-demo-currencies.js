'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Currencies', [{
      name: 'Thai Bath',
      symbol: '฿',
      isoCode: 'THB',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'United States dollar',
      symbol: '$',
      isoCode: 'USD',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Euro',
      symbol: '€',
      isoCode: 'EUR',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Currencies', null, {});
  }
};
