'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('resources', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING
      },
      path: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      format: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM('jpg', 'png', 'mp4', 'avi')
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('resources');
  }
};