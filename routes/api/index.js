const router = require("express").Router();
const registerUserRoute = require('./registerUser');
const loginUserRoute = require('./loginUser');

router.use(registerUserRoute);
router.use(loginUserRoute);

module.exports = router;