const db = require("../models");
const axios = require("axios");


function doUpdateSpreads()
{
    axios.get("https://api.sportsdata.io/v3/nfl/scores/json/Scores/2019?key=" + process.env.API_KEY_SDIO)
    .then(function(res)
    {
        let tempGames = [];
        let tempGame = {};
        let favoredTeam = "";
        let spreadCovered = false;
        for (let game of res.data)
        {
            if (game.PointSpread < 0)
            {
                favoredTeam = game.HomeTeam;
                if (game.IsOver)
                    spreadCovered = game.AwayScore - game.HomeScore < game.PointSpread ? true : false;
                else
                    spreadCovered = false;
            }
            else
            {
                favoredTeam = game.AwayTeam;
                if (game.IsOver)
                    spreadCovered = game.HomeScore - game.AwayScore < game.PointSpread ? true : false;
                else
                    spreadCovered = false;
            }
            tempGame =
            {
                "weekNumber": game.Week,
                "gameTime": game.DateTime,
                "homeTeamCode": game.HomeTeam,
                "awayTeamCode": game.AwayTeam,
                "preGameSpread": game.PointSpread,
                "favoredTeamCode": favoredTeam,
                "spreadCovered": spreadCovered,
                "homeTeamScore": game.HomeScore,
                "awayTeamScore": game.AwayScore,
                "updatedAt": Date.now()
            };
            tempGames.push(tempGame);
        }
        g_saveBulk(tempGames);
        res.json("done");
    })
    .catch(err => res.json(err));
}

function g_saveBulk(games) {
    for (let game of games)
    {
        db.Game
        .update(game,
        {
            where: { homeTeamCode: game.homeTeamCode, awayTeamCode: game.awayTeamCode }
        })
        .catch(err => console.log(err));
    }
}

module.exports = {
    getAll: function(req, res) {
        db.Game
        .findAll({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getAllForWeek: function(req, res) {
        console.log("getAllForWeek weekNumber: ");
        console.log(req.params.weekNumber);
        db.sequelize.query(`select g.gameTime,
        tH.FullName, tH.WikipediaLogoUrl as homeLogoUrl,
        tA.FullName, tA.WikipediaLogoUrl as awayLogoUrl,
        g.preGameSpread, g.favoredTeamCode
            from games g
                join teams tH on g.homeTeamCode=tH.Key
                join teams tA on g.awayTeamCode=tA.Key
            where weekNumber=${req.params.weekNumber}`)
        // db.Game
        //   .find({weekNumber: req.params.weekNumber })
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
    },
    saveBulk: g_saveBulk,
    updateSpreads: function(req, res)
    {
        var force = parseInt(req.params.force);
        var oneDayAgo = new Date();
        oneDayAgo = new Date(oneDayAgo.setDate(oneDayAgo.getDate()-1));

        var lastUpdate;

        if (!force) // if user is not forcing, let's see if it's been more than 1 day since last update.
        {
            db.Game.findAll({order: [['updatedAt', 'desc']] })
            .then((dbModel) =>
            {
                lastUpdate = dbModel[0].updatedAt;
                force = (lastUpdate === null || (lastUpdate < oneDayAgo));
                console.log("oneDayAgo");
                console.log(oneDayAgo);
                console.log("lastUpdate: ")
                console.log(lastUpdate);
                if (force)
                {
                    doUpdateSpreads();
                }
                else
                {
                    console.log("NO UPDATES NECESSARY");
                }
            })
            .catch(err => console.log(err));
        }
        else if (force)
            doUpdateSpreads();
    }
};
