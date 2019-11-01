const router = require("express").Router();

const userRoutes = require("./users");
const teamRoutes = require("./teams");
const gameRoutes = require("./games");
const predictionRoutes = require("./predictions");
const authRoute = require('./auth');

router.use("/users", userRoutes);
router.use("/teams", teamRoutes);
router.use("/games", gameRoutes);
router.use("/predictions", predictionRoutes);
router.use("/auth", authRoute);

module.exports = router;
