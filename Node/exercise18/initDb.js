const initDb = () => {
  const pgp = require('pg-promise')();
  const db = pgp("postgres://postgress:@localhost:5432/jawel");

  db.none(`
    CREATE TABLE IF NOT EXISTS planets(
      id SERIAL NOT NULL PRIMARY KEY,
      name TEXT NOT NULL,
      image TEXT
    )
  `)
    .then(() => {
      return db.none(`
        INSERT INTO planets (name) VALUES ('Earth'), ('Mars')
      `);
    })
    .then(() => {
      console.log('Database initialized');
    })
    .catch((error) => {
      console.error('Error initializing database:', error);
    });
};

module.exports = initDb;
