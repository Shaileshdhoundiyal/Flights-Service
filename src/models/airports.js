'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey: 'cityId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

      this.hasMany(models.Flight,{
        foreignKey:'departureAirportId'
      })

      this.hasMany(models.Flight,{
        foreignKey:'arrivalAirportId'
      })

      
    }
  }
  Airport.init({
    name: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    code: {
      type:DataTypes.STRING,
      allowNull:true,
      unique:true
    },
    address: {
      type:DataTypes.STRING,
      unique:true
    },
    cityId: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};