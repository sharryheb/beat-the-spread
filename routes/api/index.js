const router = require("express").Router();
const registerUserRoute = require('./registerUser');
const loginUserRoute = require('./loginUser');
const profileRoute = require('./profile');

router.use(registerUserRoute);
router.use(loginUserRoute);
router.use(profileRoute);

module.exports = router;