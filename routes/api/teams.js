const router = require("express").Router();
const teamController = require("../../controllers/teamController");


        // Matches with "/api/teams"
    router.route("/")
    .get(teamController.getAll)

    // Matches with "/api/teams/:key" (where key=<3 character team code>, such as "SEA")
    router
    .route("/:key")
    .get(teamController.getByKey)

module.exports = router;
