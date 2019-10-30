import axios from "axios";

export default {

    /******************** USERS API ********************/
    getUsers: function() {
        return axios.get("/api/users");
    },
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },
    deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
    },
    saveUser: function(userData) {
        return axios.post("/api/users", userData);
    },


    /******************** TEAMS API ********************/
    getTeams: function() {
        return axios.get("/api/teams");
    },
    getTeam: function(teamCode) {
        return axios.get("/api/teams/" + teamCode);
    },
    saveTeam: function(teamData) {
        return axios.post("/api/teams", teamData);
    },

    /******************** PREDICTIONS API **************/
    getPredictions: function() {
        return axios.get("/api/predictions");
    },
    getPrediction: function(username, gameId) {
        return axios.get("/api/predictions/" + username + "/" + gameId);
    },
    savePrediction: function(predictionData) {
        return axios.post("/api/predictions", predictionData);
    },

    /******************** GAMES API **********************/
    getGames: function() {
        return axios.get("/api/games");
    },
    getGame: function(id) {
        return axios.get("/api/games/" + id);
    },
    getGamesForWeek: function(weekNumber) {
        return axios.get("/api/games/week/" + weekNumber);
    },
    getGameFavoredTeam: function(gameId) {
        return axios.get("/api/games/favored/" + gameId);
    },
    getGameUnderdogTeam: function(gameId) {
        return axios.get("/api/games/underdog/" + gameId);
    },
    saveGame: function(gameData) {
        return axios.put("/api/games", gameData);
    },

    /******************** Authentication (signing in and out) **********************/
    registerUser: function(userData) {
        return axios.post('/api/registerUser', userData);
    }
};
