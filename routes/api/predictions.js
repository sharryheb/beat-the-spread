const router = require("express").Router();
const predictionController = require("../../controllers/predictionController");

        // Matches with "/api/predictions"
    router.route("/")
    .get(predictionController.getFanStandings)
    .post(predictionController.save)


    // Matches with "/api/predictions/:screenname"
    router.route("/:screenname")
    .get(predictionController.getByUser)
    .put(predictionController.save)

module.exports = router;
