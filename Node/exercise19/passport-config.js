const passport = require('passport');
const passportJWT = require('passport-jwt');
const { Strategy, ExtractJwt } = passportJWT;
const db = require('./db');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY
};

passport.use(new Strategy(jwtOptions, async (jwtPayload, done) => {
  try {
    const user = await db.oneOrNone('SELECT * FROM users WHERE id = $1', jwtPayload.id);

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
}));

module.exports = passport;
