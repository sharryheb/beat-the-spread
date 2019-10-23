// const User = require('../../models/user');
// const passport = require('passport');

const router = require("express").Router();

const registerUserController = require('../../controllers/registerUserController');

// router.post('/api/registerUser', (req, res, next) => {
//   passport.authenticate('register', (err, user, info) => {
//     if(err) {
//       console.log(err);
//     }
//     if(info !== undefined) {
//       console.log(info.message);
//       res.send(info.message);
//     } else {
//       req.logIn(user, err => {
//         const data = {
//           username: req.body.username,
//           email: req.body.email,
//           avatar: req.body.avatar,
//           favoriteTeamId: req.body.favoriteTeamId,
//         };
//         User.findOne({
//           where: {
//             username: data.username
//           },
//         }).then(() => {
//           console.log('user created in db');
//           res.status(200).send({ message: 'user created' });
//         });
//       });
//     }
//   })(req, res, next);
// });
router.post('/api/registerUser', (req, res, next) => {
  registerUserController.registerUser(req, res, next);
});

module.exports = router;