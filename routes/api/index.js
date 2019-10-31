const router = require("express").Router();
const userRoutes = require("./users");
const teamRoutes = require("./teams");
const gameRoutes = require("./games");
const predictionRoutes = require("./predictions");

router.use("/users", userRoutes);
router.use("/teams", teamRoutes);
router.use("/games", gameRoutes);
router.use("/predictions", predictionRoutes);

module.exports = router;
