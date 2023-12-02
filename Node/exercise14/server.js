const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
require('express-async-errors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Welcome to the Planets API!');
});

app.get('/planets', (req, res) => {
  res.json(planets);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
