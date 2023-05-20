'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Flight,{
        foreignKey : 'flight_id',
        onDelete : 'cascade',
        onUpdate : 'cascade'
      })
    }
  }
  seats.init({
    seat_id: {
      type:DataTypes.INTEGER,
      unique:true,
      allowNull:false
    },
    flight_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    row_number: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    column_number: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    class: {
      type:DataTypes.STRING,
      allowNull:false
    },
    is_available: {
      type:DataTypes.BOOLEAN,
      allowNull:false
      
    },
    is_blocked: {
      type:DataTypes.BOOLEAN,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'seats',
  });
  return seats;
};