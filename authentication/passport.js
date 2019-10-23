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
      passwordField: 'password',
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
            User.create({ 
              username, 
              email, 
              password: hashedPassword, 
              avatar 
            }).then(user => {
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

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false,
    },
    (username, password, done) => {
      try {
        User.findOne({
          where: {
            username: username,
          },
        }).then(user => {
          if(user === null) {
            return done(null, false, { message: 'bad username' });
          } else {
            bcrypt.compare(password, user.password).then(response => {
              if(response !== true) {
                console.log('passwords do not match');
                return done(null, false, { message: 'passwords do not match' });
              }
              console.log('user found & authenticated');
              return done(null, user);
            });
          }
        });
      } catch(err) {
        done(err);
      }
    },
  ),
);

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: jwtSecret,
};

passport.use(
  'jwt', 
  new JWTstrategy(opts, (jwt_payload, done) => {
    try {
      User.findOne({
        where: {
          username: jwt_payload.id
        },
      }).then(user => {
        if(user) {
          console.log('user found in db in passport');
          done(null, user);
        } else {
          console.log('user not found in db');
          done(null, false);
        }
      });
    } catch(err) {
      done(err);
    }
  }),
)