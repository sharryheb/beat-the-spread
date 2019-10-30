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
            model: db.Game,
        }]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getByGameId: function(req, res) {
    db.Prediction
      .findById({ gameId: req.params.gameId })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getByScreenname: function(req, res) {
    db.Prediction
      .findById({ screenname: req.params.screenname })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  save: function(req, res) {
    db.Prediction
      .bulkCreate(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

//  select users.screenname, users.avatar, users.favoriteTeamCode,
// 	   games.*,
//     predictions.preGamePrediction,
//     predictions.predictionCorrect

// from predictions
//     join users on users.screenname = predictions.screenname
//     join games on games.id = predictions.gameid
