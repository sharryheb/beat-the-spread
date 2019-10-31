import axios from "axios";

export default
{
    getPredictions: function() {
        return axios.get("/api/predictions");
    },
    getPrediction: function(screenname, gameId) {
        return axios.get("/api/predictions/" + screenname + "/" + gameId);
    },
    savePrediction: function(predictionData) {
        return axios.post("/api/predictions", predictionData);
    }
};
