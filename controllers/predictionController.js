const db = require("../models");

module.exports = {
  getFanStandings: function(req, res) {
    db.sequelize
        .query(
            `select
	            screenname, avatar,
	            (select count(*)
                    from predictions p where p.UserScreenname = u.screenname and p.predictionCorrect = 1)
	            as totalCorrect,
	            t.FullName, t.PrimaryColor, t.SecondaryColor,
                t.WikipediaLogoUrl as logoUrl, t.WikipediaWordMarkUrl as logoWordUrl

                from users u
                join teams t on t.Key = u.favoriteTeamCode
                order by totalCorrect DESC`
        )
      .then(dbModel => res.json(dbModel[0]))
      .catch(err => res.status(422).json(err));
  },
  getByUser: function(req, res)
  {
      db.Prediction
        .findAll({where: {UserScreenname: req.params.screenname}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  save: function(req, res) {
      console.log(req.body);
    db.Prediction
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
