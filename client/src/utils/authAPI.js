import axios from "axios";

export default {

    loginUser: function(authData) {
        return axios.post("/api/auth/loginUser", authData);
    },

    registerUser: function(authData) {
        return axios.post("/api/auth/registerUser", authData);
    }
};
