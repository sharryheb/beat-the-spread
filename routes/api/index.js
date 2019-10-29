const router = require("express").Router();
const registerUserRoute = require('./registerUser');
const loginUserRoute = require('./loginUser');
const profileRoute = require('./profile');
const logOutRoute = require('./logout');

router.use(registerUserRoute);
router.use(loginUserRoute);
router.use(profileRoute);
router.use(logOutRoute);

module.exports = router;