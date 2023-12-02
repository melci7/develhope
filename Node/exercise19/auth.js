const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('./passport-config');

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

router.use(express.json());

router.post('/login', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { username, password } = req.body;

  if (username === 'example' && password === 'password') {
    const user = { id: 1, username }; 

    const token = jwt.sign(user, SECRET_KEY);

    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('You are authenticated');
});

module.exports = router;
