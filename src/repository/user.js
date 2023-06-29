const models = require('../../models');
const { retrieve } = require('./db_connection')

module.exports = {
    getAllUsers: async (selectFields) => {
        return await retrieve(models.User.findAll({attributes: selectFields}));
    },
    getUserByUsername: async (username, selectFields) => {
        return await retrieve(models.User.findOne({ where: { username }, attributes: selectFields}));
    },
    getUserById: async (id, selectFields) => {
        return await retrieve(models.User.findByPk(id, {attributes: selectFields}));
    },
    createUser: async (user) => {
        return await models.User.create(user);
    }
}