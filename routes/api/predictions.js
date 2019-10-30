const router = require("express").Router();
const predictionController = require("../../controllers/predictionController");

        // Matches with "/api/predictions"
    router.route("/")
    .get(predictionController.getAll)


    // Matches with "/api/predictions/:username"
    // router
    // .route("/:username")
    // .get(predictionController.getById)
    // .put(predictionController.save)

module.exports = router;




//  select users.username, users.avatar, users.favoriteTeamCode,
// 	   games.*,
//     predictions.preGamePrediction,
//     predictions.predictionCorrect

// from predictions
//     join users on users.username = predictions.username
//     join games on games.id = predictions.gameid
