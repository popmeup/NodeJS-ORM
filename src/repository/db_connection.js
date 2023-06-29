const models = require('../../models');

const authenticateDatabase = async () => {
    await models.sequelize.authenticate();
    console.log('Database authenticated.')
}
  
const closeDatabaseConnection = async () => {
    await models.sequelize.close();
}

const retrieve = async (task) => {
    try {
        return await task;
      } catch (error) {
        console.error('Error retrieving data from the database:', error);
        throw error;
      }
}

module.exports = {retrieve, authenticateDatabase, closeDatabaseConnection};