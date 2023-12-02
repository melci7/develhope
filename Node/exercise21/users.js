const express = require('express');
const jwt = require('jsonwebtoken');
const { passport } = require('./passport-config');
const db = require('./db');

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

router.use(express.json());

router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await db.oneOrNone('SELECT * FROM users WHERE username = $1', username);
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists. Choose a different username.' });
    }

    const newUser = await db.one(
      'INSERT INTO users(username, password) VALUES($1, $2) RETURNING id, username',
      [username, password]
    );

    res.json({ msg: 'Signup successful. Now you can log in.' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY);

    res.json({ token, id: user.id, username: user.username });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/logout', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    await db.none('UPDATE users SET token=NULL WHERE id=$1', req.user.id);
    res.json({ msg: 'Logout successful.' });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
