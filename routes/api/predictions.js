const router = require("express").Router();
const predictionController = require("../../controllers/predictionController");

        // Matches with "/api/predictions"
    router.route("/")
    .get(predictionController.getAll)


    // Matches with "/api/predictions/:screenname"
    // router
    // .route("/:screenname")
    // .get(predictionController.getById)
    // .put(predictionController.save)

module.exports = router;




//  select users.screenname, users.avatar, users.favoriteTeamCode,
// 	   games.*,
//     predictions.preGamePrediction,
//     predictions.predictionCorrect

// from predictions
//     join users on users.screenname = predictions.screenname
//     join games on games.id = predictions.gameid
