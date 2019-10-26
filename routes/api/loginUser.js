const router = require("express").Router();
const loginUserController = require('../../controllers/loginUserController');

router.post('/loginUser', (req, res, next) => {
  loginUserController.loginUser(req, res, next);
});

module.exports = router;