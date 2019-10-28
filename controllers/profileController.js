const db = require('../models');
const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports = {
  profile: (req, res, next) => {
    // const token = req.headers.authorization || req.headers.Authorization;
    // const decodedToken = jwt.verify(token, jwtSecret);
    // let token = req.headers['x-access-token'] || req.headers['authorization'];
    // const decodedToken = jwt.verify(token, jwtSecret);
    // res.send(decodedToken);
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
          username: user.username,
          email: user.email,
          avatar: user.avatar
        });
      }

    })(req, res, next);
  }
};