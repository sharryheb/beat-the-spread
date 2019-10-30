const db = require("../models");

module.exports = {
  getAll: function(req, res) {
    db.Prediction
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getByGameId: function(req, res) {
    db.Prediction
      .findById({ gameId: req.params.gameId })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getByUsername: function(req, res) {
    db.Prediction
      .findById({ username: req.params.username })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  save: function(req, res) {
      console.log(req.body);
    db.Prediction
      .bulkCreate(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

//  select users.username, users.avatar, users.favoriteTeamCode,
// 	   games.*,
//     predictions.preGamePrediction,
//     predictions.predictionCorrect

// from predictions
//     join users on users.username = predictions.username
//     join games on games.id = predictions.gameid
