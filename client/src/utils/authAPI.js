import axios from "axios";

export default {

    loginUser: function(authData) {
        return axios.post("/api/auth/loginUser", authData);
    },

    registerUser: function(authData) {
        console.log("in authAPI registerUser");
        return axios.post("/api/auth/registerUser", authData);
    }
};
