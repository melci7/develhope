const pgp = require('pg-promise')();
const dotenv = require('dotenv');

dotenv.config();

const db = pgp({
    connectionString: "postgres://postgress:@localhost:5432/jawel"
});

const createUsersTable = `
  DROP TABLE IF EXISTS users;
  CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    token TEXT
  );
`;

db.none(createUsersTable)
  .then(() => console.log('Users table created'))
  .catch(error => console.error('Error creating users table:', error));

module.exports = db;
