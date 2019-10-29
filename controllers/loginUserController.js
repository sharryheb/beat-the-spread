const db = require('../models');
const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports = {
  loginUser: (req, res, next, session) => {
    passport.authenticate('login', {
      failureRedirect: '/SignUp'
    }, (err, user, info) => {
      if(err) {
        console.log(err);
      }
      if(info !== undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        req.logIn(user, err => {
          db.user.findOne({
            where: {
              email: user.email
            },
          }).then(user => {
            const token = jwt.sign({ 
              id: user.id
            }, jwtSecret);
            
            const currentSession = req.session;
            currentSession.token = token;
            console.log(currentSession.token);

            res.status(200).send({
              auth: true,
              token: token,
              message: 'user found & logged in',
            });
          });
        });
      }
    })(req, res, next);
  }
};