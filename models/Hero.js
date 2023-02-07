'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hero.hasMany(models.Image, {
        foreignKey: 'heroes_id'
      });
      Hero.belongsToMany(models.Power, {
        through:'powers_to_heroes',
        foreignKey: 'heroes_id'
      });
    }
  }
  Hero.init({
    nickName: {
      field: 'nick_name',
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    realName: {
      field: 'real_name',
      type: DataTypes.STRING,
      allowNull: false
    },
    originDescriptiom: {
      field: 'origin_descriptiom',
      type: DataTypes.STRING
    },
    catchPhrase: {
      field: 'catch_phrase',
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes',
    underscored: true
  });
  return Hero;
};