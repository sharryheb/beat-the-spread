import axios from "axios";

export default {

    getGames: function() {
        return axios.get("/api/games");
    },
    updateGames: function(force) {
        return axios.get("/api/games/update/" + force);
    },
    getGame: function(id) {
        return axios.get("/api/games/" + id);
    },
    getWeeks: function() {
        return axios.get("/api/games/weeks");
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
    }
};
