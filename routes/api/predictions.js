const router = require("express").Router();
const predictionController = require("../../controllers/predictionController");

module.exports = function(app)
{

        // Matches with "/api/predictions"
    router.route("/")
    .get(predictionController.getAll)


    // Matches with "/api/predictions/:username"
    router
    .route("/:username")
    .get(predictionController.getById)
    .put(predictionController.save)
}
