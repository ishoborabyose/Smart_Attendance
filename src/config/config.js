// import { config } from 'dotenv';
const config = require('dotenv').config;

config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    seederStorage: 'sequelize'
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    seederStorage: 'sequelize'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    use_env_variable: 'DATABASE_URL',
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false,
    seederStorage: 'sequelize'
  }
};