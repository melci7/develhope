const express = require('express');
const { passport, authorize } = require('./passport-config');
const usersRoutes = require('./users');
const authRoutes = require('./auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/users', usersRoutes);
app.use('/auth', authRoutes);

app.get('/protected-route', authorize, (req, res) => {
  res.send(`You are authenticated, ${req.user.username}!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
