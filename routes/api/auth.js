const router = require("express").Router();
const authController = require('../../controllers/authController');


router.post('/loginUser', (req, res, next) => {
  authController.loginUser(req, res, next);
});

router.post('/registerUser', (req, res, next) => {
  authController.registerUser(req, res, next);
});

router.get('/profile', (req, res, next) => {
  authController.profile(req, res, next);
});

router.get('/sign-out', (req, res) => {
  authController.logOut(req, res);
});

module.exports = router;
