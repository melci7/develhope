const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const planetRouter = require('./planet');
const initDb = require('./initDb');
require('express-async-errors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

initDb();

app.use(planetRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
