'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seat_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique:true
      },
      flight_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model : 'Flights',
          key : 'id'
        },
        onDelete : 'cascade'
        
      },
      row_number: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      column_number: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      class: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      is_available: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      is_blocked: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('seats');
  }
};