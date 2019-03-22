const path = require('path');
require('dotenv').config({ path: path.resolve('.env') });

module.exports = {
  development: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'eshopy',
    dialect: 'postgres',
    operatorAliases: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  test: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'eshopy_test',
    dialect: 'postgres',
    operatorAliases: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  production: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'eshopy_prod',
    dialect: 'postgres',
    operatorAliases: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};
