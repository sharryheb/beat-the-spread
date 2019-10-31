import axios from "axios";

export default
{
    getTeams: function() {
        return axios.get("/api/teams");
    },
    getTeam: function(teamCode) {
        return axios.get("/api/teams/" + teamCode);
    },
    saveTeam: function(teamData) {
        return axios.post("/api/teams", teamData);
    }
};
