import axios from "axios";

export default {

    loginUser: function(authData) {
        return axios.post("/api/auth/loginUser", authData);
    },
    logOut: function()
    {
        return axios.get("/api/auth/sign-out");
    },
    registerUser: function(authData) {
        return axios.post("/api/auth/registerUser", authData);
    }
};
