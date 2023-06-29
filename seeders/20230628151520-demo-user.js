'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Thitiya',
      lastName: 'Chaipanya',
      email: 'pop@example.com',
      username: 'Pop.123###',
      password: '15ee29d739331795c04a67786351578b',
      role: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      username: 'John.123###',
      password: '20e2fcd13170f1bc6ccbc55a14812586',
      role: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Kris',
      lastName: 'Hey',
      email: 'kris@example.com',
      username: 'Kris.123###',
      password: '5b56fbc596ff145e0500bbe8d0086808',
      role: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
