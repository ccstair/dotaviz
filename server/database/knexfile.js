require('dotenv').config({
  silent: true,
});
require('dotenv').config({
  path: '../../.env',
  silent: true,
});

const client = 'mysql';
const connection = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'dotauser',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || 'dotaviz',
};

const migrations = {
  tableName: 'knex_migrations',
};

module.exports = {
  development: {
    client,
    connection,
    migrations,
    pool: {
      max: 1,
    },
  },
  // production: { client, connection, migrations },
  production: {
    client,
    connection,
    migrations,
    pool: {
      max: 1,
    },
  },
};
