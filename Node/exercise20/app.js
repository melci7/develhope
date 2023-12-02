const express = require('express');
const passport = require('./passport-config');
const usersRoutes = require('./users');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
