const router = require("express").Router();

const registerUserRoute = require('./registerUser');
const loginUserRoute = require('./loginUser');
const profileRoute = require('./profile');
const logOutRoute = require('./logout');
//const userRoutes = require("./users.js");
//const teamRoutes = require("./teams.js");
const gameRoutes = require("./games");
const predictionRoutes = require("./predictions");


router.use(registerUserRoute);
router.use(loginUserRoute);
router.use(profileRoute);
router.use(logOutRoute);

//router.use("/users", userRoutes);
//router.use("/teams", teamRoutes);
router.use("/games", gameRoutes);
router.use("/predictions", predictionRoutes);

module.exports = router;

