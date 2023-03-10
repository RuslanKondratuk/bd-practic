'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Power extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Power.belongsToMany(models.Hero, {
        through:'powers_to_heroes',
        foreignKey: 'powers_id'
      });
    }
  }
  Power.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Power',
    tableName: 'powers',
    underscored: true
  });
  return Power;
};