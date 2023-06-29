const express = require('express');
require('dotenv').config();
const cors = require("cors");
const bodyParser = require('body-parser');
const swaggerUi = require("swagger-ui-express");
const swaggerAutogen = require('swagger-autogen')()
const { authenticateDatabase, closeDatabaseConnection } = require('./src/repository/db_connection')

const outputFile = './swagger.json'
const endpointsFiles = ['./endpoints.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./app.js')
})

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Start the server only after authenticating the database connection
authenticateDatabase()
  .then(() => {
    app.listen(port, () => {
      const swaggerFile = require('./swagger.json')
      app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))
      require('./endpoints')(app)
    });
  })
  .catch(error => {
    console.error('Unable to authenticate database connection:', error);
    process.exit(1);
  });

// Gracefully close the database connection when the application is shutting down
process.on('SIGINT', async () => {
  try {
    await closeDatabaseConnection();
    console.log('Database connection closed');
    process.exit(0); // Terminate the application
  } catch (error) {
    console.error('Unable to close database connection:', error);
    process.exit(1);
  }
});

