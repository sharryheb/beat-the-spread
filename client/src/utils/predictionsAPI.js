import axios from "axios";

export default
{
    getStandings: function() {
        return axios.get("/api/predictions");
    },
    getPrediction: function(screenname, gameId) {
        return axios.get("/api/predictions/" + screenname + "/" + gameId);
    },
    getPredictionsForUser: function(screenname) {
        return axios.get("/api/predictions/" + screenname);
    },
    savePrediction: function(predictionData) {
        return axios.post("/api/predictions", predictionData);
    }
};
