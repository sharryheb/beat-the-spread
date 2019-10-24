// const User = require('../../models/user');
// const passport = require('passport');

const router = require("express").Router();

const registerUserController = require('../../controllers/registerUserController');

router.post('/', (req, res, next) => {
  registerUserController.registerUser(req, res, next);
});

module.exports = router;