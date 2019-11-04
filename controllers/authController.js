const db = require('../models');
const passport = require('passport');
let registerSuccessOrErrorMsg;
let logInSuccessOrErrorMsg;
let cookieOptions = require('../authentication/cookie-options');

module.exports = {

  logOut: (req, res) => {
    req.logOut();
    res.redirect('/');
  },

  loginUser: (req, res, next) => {
    console.log('outside login user passport.authenticate');
    passport.authenticate('login', (err, user, info) => {
      if(!user) {
        logInSuccessOrErrorMsg = {
          fail: 'The email and/or password were incorrect. Please try again.'
        };
        res.clearCookie('registerFail');
        res.clearCookie('registerSuccess');
        res.clearCookie('logInSuccessOrErrorMsg');
        res.cookie('logInSuccessOrErrorMsg', logInSuccessOrErrorMsg, cookieOptions).send('Login failure');
      } else {
        console.log('user: ', user);
        if(err) {
          logInSuccessOrErrorMsg = {
            fail: 'The email and/or password were incorrect. Please try again.'
          };
  
          res.clearCookie('registerFail');
          res.clearCookie('registerSuccess');
          res.clearCookie('logInSuccessOrErrorMsg');
          res.cookie('logInSuccessOrErrorMsg', logInSuccessOrErrorMsg, cookieOptions).send('Login failure');
        }
        if(info !== undefined) {
          res.clearCookie('registerFail');
          res.clearCookie('registerSuccess');
          res.clearCookie('logInSuccessOrErrorMsg');
          res.cookie('logInSuccessOrErrorMsg', logInSuccessOrErrorMsg, cookieOptions).send('Login failure');
        } else {
          req.logIn(user, err => {
            db.User.findOne({
              where: {
                email: user.email
              },
            }).then(user => {
              logInSuccessOrErrorMsg = {
                success: {
                  message: 'You have successfully logged in!',
                  email: user.email,
                  screenname: user.screenname,
                  avatar: user.avatar,
                  favoriteTeamCode: user.favoriteTeamCode
                }
              };
              res.clearCookie('registerFail');
              res.clearCookie('registerSuccess');
              res.clearCookie('logInSuccessOrErrorMsg');
              res.cookie('logInSuccessOrErrorMsg', logInSuccessOrErrorMsg, cookieOptions).send('Login success');
            });
          });
        }
      }
    })(req, res, next);
  },

  registerUser: (req, res, next) => {
      console.log("in auth controller");
    passport.authenticate('register', (err, user, info) => {
      if(!user) {
        registerSuccessOrErrorMsg = 'Your regisration failed as the email address is already taken.';
        res.clearCookie('registerFail');
        res.clearCookie('registerSuccess');
        res.clearCookie('logInSuccessOrErrorMsg');
        res.cookie('registerFail', registerSuccessOrErrorMsg, cookieOptions).send('Register failure');
      } else {
        if(err) {
          console.log(err);
        }
        if(info !== undefined) {
          res.send(info.message);
        } else {
          req.logIn(user, err => {
            const data = {
              screenname: req.body.screenname,
              email: req.body.email,
              avatar: req.body.avatar,
              favoriteTeamCode: req.body.favoriteTeamCode
            };
            db.User.findOne({
              where: {
                email: data.email
              },
            }).then(() => {              
              registerSuccessOrErrorMsg = 'New accout created';
              res.clearCookie('registerFail');
              res.clearCookie('registerSuccess');
              res.clearCookie('logInSuccessOrErrorMsg');
              res.cookie('registerSuccess', registerSuccessOrErrorMsg, cookieOptions).send('Registration success!'); 
            });
          });
        }
      }
    })(req, res, next);
  },

  profile: (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if(info !== undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        console.log('user in DB from route');
        res.status(200).send({
          auth: true,
          screenname: user.screenname,
          email: user.email,
          avatar: user.avatar,
          favoriteTeamCode: user.favoriteTeamCode
        });
      }
    })(req, res, next);
  }
};
