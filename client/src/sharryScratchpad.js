import axios from "axios";
import gamesAPI from "./utils/gamesAPI";
import teamsAPI from "./utils/teamsAPI";
import predictionsAPI from "./utils/predictionsAPI";
import usersAPI from "./utils/usersAPI";


export default {
    async loadGames(){
            try {
            const res = await gamesAPI.getGames();
            // do something with the data here
            console.log("************ GAMES *************");
            console.log(res.data);
        }
        catch (err) {
            return console.log(err);
        }
    },

    async loadTeams()
    {
        try
        {
            const res = await teamsAPI.getTeams();
            // do something with the data here
            console.log("************ TEAMS *************");
            console.log(res.data);
        }
        catch(err)
        {
            console.log(err);
        }
    },

    async loadUsers()
    {
        try
        {
            const res = await usersAPI.getUsers();
            // do something with the data here
            console.log("************ USERS *************");
            console.log(res.data);
        }
        catch(err)
        {
            console.log(err);
        }
    },

    async saveUser(userData){
        try {
            const res = await usersAPI.saveUser(userData);
            return res;
        }
        catch (err) {
            return console.log(err);
        }
    },

    async savePrediction(predictionData){
        try {
            const res = await predictionsAPI.savePrediction(predictionData);
            // do something with the data here
            //this.calculatePredictionResults();
            return res;
        }
        catch (err) {
            return console.log(err);
        }
    },

    async calculatePredictionResults()
    {
        try
        {
            const res = await predictionsAPI.getPredictions();
            console.log("************ PREDICTIONS *************");
            console.log(res.data);
        }
        catch(err)
        {
            console.log(err);
        }
    },

    async updateSpreads()
    {
        try {
            const res = await axios.get("https://api.sportsdata.io/v3/nfl/scores/json/Scores/2019?key=284949503768453bb5e67eb98f2dfcb9");
            let tempGame = {};
            let favoredTeam = "";
            let spreadCovered = false;
            for (let game of res.data) {
                // this api reports the PointSpread as the value for the Home Team,
                // so we have to compute which team is the "favored team"
                // Only gives home team point spread which could be negative (favored)
                // or positive (underdog)
                if (game.PointSpread < 0) {
                    favoredTeam = game.HomeTeam;
                    if (game.IsOver)
                        spreadCovered = game.AwayScore - game.HomeScore < game.PointSpread ? true : false;
                    else
                        spreadCovered = false;
                }
                else {
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
                        "awayTeamScore": game.AwayScore
                    };
                gamesAPI.saveGame(tempGame)
                    .catch(err => console.log(err));
            }
        }
        catch (err_1) {
            return console.log(err_1);
        }
    }
}
