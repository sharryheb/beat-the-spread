const db = require("../models");

module.exports = {
  getAll: function(req, res) {
    db.User
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getByScreenname: function(req, res) {
      db.User
        .findOne({where: {screenname: req.params.screenname}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  save: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
