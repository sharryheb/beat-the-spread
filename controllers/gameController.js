const db = require("../models");
const axios = require("axios");


function doUpdateGames(games)
{
    let tempGames = [];
    let tempGame = {};
    let favoredTeam = "";
    let spreadCovered = false;
    for (let game of games)
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
    return g_saveBulk(tempGames);
}

function g_saveBulk(games) {
    var promises = [];
    for (let game of games)
    {
        promises.push(db.Game
        .update(game,
        {
            where: { homeTeamCode: game.homeTeamCode, awayTeamCode: game.awayTeamCode }
        })
        .then(() =>
        {
            // find gameId of the game just updated
            db.Game.findAll({where: { homeTeamCode: game.homeTeamCode, awayTeamCode: game.awayTeamCode }})
            .then((dbModelCurrentGame) =>
            {
                var currentGame = dbModelCurrentGame[0].dataValues;
                var currentGameId = currentGame.id;
                // find all predictions with that gameId
                db.Prediction.findAll({where: {GameId: currentGameId}})
                .then((dbModelPredictionsForGame) =>
                {
                    for (prediction of dbModelPredictionsForGame)
                    {
                        var currentPrediction = prediction.dataValues;
                        var predictionCorrect = 0;
                        console.log("************ processing prediction ****************")
                        console.log("currentGame.spreadCovered: " + currentGame.spreadCovered);
                        console.log("currentPrediction.preGamePrediction: " + currentPrediction.preGamePrediction);
                        if ( // spreadCovered && agreed with prediction, user's prediction was correct
                            // OR spread NOT covered && disagreed with prediction, user's prediction was correct
                            (currentGame.spreadCovered && currentPrediction.preGamePrediction) ||
                            (!currentGame.spreadCovered && !currentPrediction.preGamePrediction))
                            {
                                console.log("setting predictionCorrect to 1");
                                predictionCorrect = 1;
                            }
                        promises.push(
                            db.Prediction
                            .update({predictionCorrect: predictionCorrect},{where: { GameId: currentGameId }})
                            .catch(err => console.log(err)));
                    }
                })
            });
        })
        .catch(err => console.log(err)));
    }
    return promises;
}

module.exports = {
    getAll: function(req, res) {
        db.Game
        .findAll({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getWeeks: function(req, res) {
        db.Game
        .findAll({
            attributes: [[db.Sequelize.fn('DISTINCT', db.Sequelize.col('weekNumber')), 'weekNumber']]
        })
        .then((dbModel) =>
        {
            res.json(dbModel);
        })
        .catch((err) =>
        {
            res.status(422).json(err)
        });
    },
    getAllForWeek: function(req, res) {
        db.sequelize.query(`select g.id as id,
        g.gameTime,
	    tH.Key as homeTeamCode,
        tH.Name as homeShortName,
        tH.FullName as homeFullName,
        tH.WikipediaLogoUrl as homeLogoUrl,
        tH.WikipediaWordMarkUrl as homeWordMarkUrl,
        tH.City as gameLocation,
        tA.Key as awayTeamCode,
        tA.Name as awayShortName,
        tA.FullName as awayFullName,
        tA.WikipediaLogoUrl as awayLogoUrl,
        tA.WikipediaWordMarkUrl as awayWordMarkUrl,
        g.preGameSpread,
        g.favoredTeamCode,
        g.homeTeamScore,
        g.awayTeamScore,
        g.spreadCovered
            from games g
                join teams tH on g.homeTeamCode=tH.Key
                join teams tA on g.awayTeamCode=tA.Key
            where weekNumber=${req.params.weekNumber}`)
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

    updateGames: function(req, res)
    {
        var force = parseInt(req.params.force);
        var now = new Date();
        var oneDayAgo = new Date(now.setDate(now.getDate()-1));

        var lastUpdate;

        if (!force) // if user is not forcing, let's see if it's been more than 1 day since last update.
        {
            db.Game.findAll({order: [['updatedAt', 'desc']], attributes: ['updatedAt']})
            .then((dbModel) =>
            {
                lastUpdate = dbModel[0].updatedAt;
                force = (lastUpdate === null || (lastUpdate < oneDayAgo));
            })
            .catch(err => console.log(err));
        }

        if (force) // do not use "else" here, as the above block can change the value of "force"
        {
            console.log("FORCING UPDATES");
            axios.get("https://api.sportsdata.io/v3/nfl/scores/json/Scores/2019?key=" + process.env.API_KEY_SDIO)
            .then(function(res)
            {
                Promise.all(doUpdateGames(res.data))
                .catch(err => console.log(err));
            })
            .catch(err => res.send(err));
            res.send("Success");
        }
        else
        {
            res.send("Success");
        }
    }
};
