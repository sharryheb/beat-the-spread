// Passport NPM config - see:
// https://itnext.io/implementing-json-web-tokens-passport-js-in-a-javascript-application-with-react-b86b1f313436
const jwtSecret = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');

const BCRYPT_SALT_ROUNDS = 12;

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
// Access MySQL table for Users
const User = require('../models/user');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  'register',
  new localStrategy(
    {
      usernameField: 'username',
      emailField: 'email',
      passwordField: 'password',
      avatar: 'avatar',
      session: false
    },
   (username, email, password, avatar, done) => {
     try {
      User.findOne({
        where: {
          username
        },
      }).then(user => {
        if(user !== null) {
          
          return done(null, false, { message: 'username already taken' })
        } else {
          bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
            User.create({ username, email, password: hashedPassword, avatar }).then(user => {
              
              return done(null, user);
            });
          });
        }
      });
     } catch(err) {
       done(err);
     }

   }
  )
);

