const db = require('../models');
const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports = {
  loginUser: (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if(err) {
        console.log(err);
        return res.redirect('/SignIn');
      }
      if(info !== undefined) {
        return res.redirect('/SignIn');
      } else {
        req.logIn(user, err => {
          db.user.findOne({
            where: {
              email: user.email
            },
          }).then(user => {
            // const token = jwt.sign({ 
            //   id: user.id
            // }, jwtSecret);
            
            // res.status(200).send({
            //   auth: true,
            //   token: token,
            //   message: 'user found & logged in',
            // });
            return res.redirect('/api/profile/');
          });
        });
      }
    })(req, res, next);
  }
};