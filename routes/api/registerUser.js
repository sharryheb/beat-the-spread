const router = require("express").Router();

const registerUserController = require('../../controllers/registerUserController');

router.post('/registerUser', (req, res, next) => {
  registerUserController.registerUser(req, res, next);
});

module.exports = router;