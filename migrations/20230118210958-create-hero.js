'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickName: {
        field: 'nick_name',
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      realName: {
        field: 'real_name',
        type: Sequelize.STRING,
        allowNull: false
      },
      origin_descriptiom: {
        field: 'origin_descriptiom',
        type: Sequelize.TEXT
      },
      catch_phrase: {
        field: 'catch_phrase',
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('heroes');
  }
};