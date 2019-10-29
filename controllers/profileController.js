const passport = require('passport');

module.exports = {
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
          username: user.username,
          email: user.email,
          avatar: user.avatar
        });
      }
    })(req, res, next);
  }
};