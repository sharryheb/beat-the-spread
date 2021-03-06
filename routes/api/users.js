const router = require("express").Router();
const userController = require("../../controllers/userController");


        // Matches with "/api/users"
    router.route("/")
    .get(userController.getAll)
    .post(userController.save)

    // Matches with "/api/users/:screenname"
    router.route("/:screenname")
    .get(userController.getByScreenname)

module.exports = router;
