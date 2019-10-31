const db = require('../models');
const passport = require('passport');

module.exports = {
  registerUser: (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
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
            favoriteTeamId: parseInt(req.body.favoriteTeamId)
          };
          db.User.findOne({
            where: {
              email: data.email
            },
          }).then(() => {
            console.log('user created in db');
            res.status(200).send({ message: 'user created' });
          });
        });
      }
    })(req, res, next);
  }
};