# Sample ExpressJS

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

- Node
- NPM 

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install

## Configure app
Add .env file for credentials
- NODE_ENV = development
- DB_USERNAME='username'
- DB_PASSWORD='password'
- DB_DATABASE='db'
- DB_HOST='host'
- TOKEN_KEY='key'

## Run migrations
  
  $ npm run migrate:up  


## Seed demo data

   $ npx sequelize-cli db:seed:all


## Running the project

    $ npm start


## Using Swagger, http://localhost:3000/swagger
