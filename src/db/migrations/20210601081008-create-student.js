'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cardId: {
        type: Sequelize.INTEGER
      },
      registrationN: {
        type: Sequelize.INTEGER
      },
      names: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      faculty: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },
      college: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      contact: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Students');
  }
};