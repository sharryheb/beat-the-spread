const db = require("../models");

module.exports = {
  getAll: function(req, res) {
    db.Prediction
      .findAll({
        attributes: ["preGamePrediction","predictionCorrect"],
        include:
        [{
            model: db.User,
            attributes: [ "screenname", "avatar", "favoriteTeamCode" ]
        },
        {
            model: db.Game
        }]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   getByGameId: function(req, res) {
//     db.Prediction
//       .findById({ gameId: req.params.gameId })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   getByScreenname: function(req, res) {
//     db.Prediction
//       .findById({ screenname: req.params.screenname })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  save: function(req, res) {
      console.log("trying save...");
      console.log(req.body);
    db.Prediction
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
