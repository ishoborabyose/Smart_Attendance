'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AttendedStudents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      regNumber: {
        type: Sequelize.INTEGER
      },
      studentNames: {
        type: Sequelize.STRING
      },
      moduleName: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      lecturer: {
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
    await queryInterface.dropTable('AttendedStudents');
  }
};