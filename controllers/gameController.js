const db = require("../models");

module.exports = {
  getAll: function(req, res) {
    db.Game
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getAllForWeek: function(req, res) {
    db.Game
      .find({weekNumber: req.params.weekNumber })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getAllForTeam: function(req, res) {
    db.Game
      .findAll({where: { [Op.or]: [
            {awayTeamId: req.params.awayTeamId},
            {homeTeamId: req.params.homeTeamId}] }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getFavoredTeam: function(req, res) {
    db.Game
      .find({gameTime: req.params.gameTime })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUnderdogTeam: function(req, res) {
    db.Game
      .find({gameTime: req.params.gameTime })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getById: function(req, res) {
    db.Game
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  save: function(req, res) {
    db.Game
      .update(req.body,
        {
            where: {homeTeamCode: req.body.homeTeamCode, awayTeamCode: req.body.awayTeamCode}
        })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
