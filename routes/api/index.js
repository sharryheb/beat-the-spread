const router = require("express").Router();

const registerUserRoute = require('./registerUser');

router.use(registerUserRoute);

module.exports = router;