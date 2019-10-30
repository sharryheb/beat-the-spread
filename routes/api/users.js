const router = require("express").Router();
const userController = require("../../controllers/userController");


        // Matches with "/api/users"
    router.route("/")
    .get(userController.getAll)

    // Matches with "/api/teams/:key" (where key=<3 character team code>, such as "SEA")
    // router
    // .route("/:username")
    // .get(userController.getByUsername)

module.exports = router;
