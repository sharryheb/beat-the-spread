const router = require("express").Router();


const registerUserRoute = require('./registerUser');
const loginUserRoute = require('./loginUser');
const profileRoute = require('./profile');
const logOutRoute = require('./logout');
const predictionRoutes = require("./predictions");


router.use(registerUserRoute);
router.use(loginUserRoute);
router.use(profileRoute);
router.use(logOutRoute);

const userRoutes = require("./users");
const teamRoutes = require("./teams");
const gameRoutes = require("./games");

router.use("/users", userRoutes);
router.use("/teams", teamRoutes);
router.use("/games", gameRoutes);
router.use("/predictions", predictionRoutes);

module.exports = router;

