const models = require('../../models');
const { retrieve } = require('./db_connection')

module.exports = {
    getAllProducts: async () => {
        models.Currency.hasMany(models.Products, {foreignKey: 'id'})
        models.Products.belongsTo(models.Currency, {foreignKey: 'currencyId'});
        return await retrieve(models.Products.findAll({include: models.Currency}));
    },
    getProductById: async (id) => {
        models.Currency.hasMany(models.Products, {foreignKey: 'id'})
        models.Products.belongsTo(models.Currency, {foreignKey: 'currencyId'});
        return await retrieve(models.Products.findByPk(id, {include: models.Currency}));
    }
}