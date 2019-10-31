// Passport NPM config - see:
// https://itnext.io/implementing-json-web-tokens-passport-js-in-a-javascript-application-with-react-b86b1f313436
const jwtSecret = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');

const BCRYPT_SALT_ROUNDS = 12;

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
// Access MySQL database
const db = require("../models");
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  'register',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
      passReqToCallback: true,
    },
   (req, email, password, done) => {
     try {
      db.User.findOne({
        where: {
          email
        },
      }).then(user => {
        if(user !== null) {
          return done(null, false, { message: 'email address already taken' });
        } else {
          bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
            db.User.create({ 
              screenname: req.body.screenname,
              email: email, 
              password: hashedPassword, 
              avatar: req.body.avatar,
              favoriteTeamId: parseInt(req.body.favoriteTeamId)
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
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    (email, password, done) => {
      try {
        db.User.findOne({
          where: {
            email: email,
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
  // jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret
};

passport.use(
  'jwt', 
  new JWTstrategy(opts, (jwt_payload, done) => {
    try {
      console.log(jwt_payload);
      db.User.findOne({
        where: {
          id: jwt_payload.id
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
);