const router = require("express").Router();
const predictionController = require("../../controllers/predictionController");

        // Matches with "/api/predictions"
    router.route("/")
    .get(predictionController.getAll)
    .post(predictionController.save)


    // Matches with "/api/predictions/:screenname"
    // router
    // .route("/:screenname")
    // .get(predictionController.getById)
    // .put(predictionController.save)

module.exports = router;
