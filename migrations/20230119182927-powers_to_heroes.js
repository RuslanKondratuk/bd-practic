'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('powers_to_heroes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
      },
      heroesId: {
        field: 'heroes_id',
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'heroes',
          key: 'id'
        }
      },
      powersId: {
        field: 'powers_id',
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'powers',
          key: 'id'
        }
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('powers_to_heroes');

  }
};
