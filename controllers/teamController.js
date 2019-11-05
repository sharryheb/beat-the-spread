const db = require("../models");

// pull by id, key, fullname, conf/div,
module.exports = {
  getAll: function(req, res) {
    db.Team
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    getByKey: function(req, res) {
    db.Team
      .find({ Key: req.params.key })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }
};
