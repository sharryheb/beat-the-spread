const db = require('../models');
const passport = require('passport');

module.exports = {
  loginUser: (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
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
              
            }
          })
        })
      }

    })(req, res, next)
  }
};