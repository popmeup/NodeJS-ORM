'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExchangeRate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExchangeRate.init({
    currencyId: DataTypes.INTEGER,
    rate: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ExchangeRate',
  });
  return ExchangeRate;
};