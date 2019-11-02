const router = require("express").Router();
const gameController = require("../../controllers/gameController");

    // Matches with "/api/games"
    router.route("/")
    .get(gameController.getAll)
    .put(gameController.saveBulk)

    // Matches with "/api/games/update/:force"
    router.route("/update/:force")
    .get(gameController.updateSpreads)

    // Matches with "/api/games/:id"
    router
    .route("/:id")
    .get(gameController.getById)
    .put(gameController.save)

    // Matches with "/api/games/week/:weekNumber"
    router
    .route("/week/:weekNumber")
    .get(gameController.getAllForWeek)

    // Matches with "/api/games/favored/:id"
    router
    .route("/favored/:id")
    .get(gameController.getFavoredTeam)

    // Matches with "/api/games/underdog/:id"
    router
    .route("/underdog/:id")
    .get(gameController.getUnderdogTeam)

module.exports = router;
