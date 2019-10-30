import axios from "axios";
import API from "./utils/API";


export default {
    loadGames: function (){
            API.getGames()
            .then(res =>
            {
                // do something with the data here
                console.log(res.data);
            })
            .catch(err => console.log(err));
    },

    updateSpreads: function()
    {
        axios.get("https://api.sportsdata.io/v3/nfl/scores/json/Scores/2019?key=284949503768453bb5e67eb98f2dfcb9")
        .then(function(res)
        {
            let tempGame = {};
            let favoredTeam = "";
            let spreadCovered = false;

            for(let game of res.data)
            {
                // this api reports the PointSpread as the value for the Home Team,
                // so we have to compute which team is the "favored team"
                // Only gives home team point spread which could be negative (favored)
                // or positive (underdog)

                if (game.PointSpread < 0)
                {
                    favoredTeam = game.HomeTeam;
                    if (game.IsOver)
                        spreadCovered = game.AwayScore - game.HomeScore < game.PointSpread ? true : false;
                    else spreadCovered = false;
                }
                else
                {
                    favoredTeam = game.AwayTeam;
                    if (game.IsOver)
                        spreadCovered = game.HomeScore - game.AwayScore < game.PointSpread ? true : false;
                    else spreadCovered = false;
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
                    "awayTeamScore": game.AwayScore
                }
                API.saveGame(tempGame)
                .catch(err => console.log(err));
            }

        })
        .catch(err => console.log(err));
    }
}
