import axios from "axios";

export default
{
    getUsers: function() {
        return axios.get("/api/users");
    },
    getUser: function(screenname) {
        return axios.get("/api/users/" + screenname);
    },
    deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
    },
    saveUser: function(userData) {
        return axios.post("/api/users", userData);
    }
};
