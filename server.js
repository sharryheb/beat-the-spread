require('dotenv').config();

const express = require("express");
const routes = require("./routes");
const registerUserRoute = require('./routes/api/registerUser');
const app = express();
/*
Code to implement NPM Passport with React (logging in to an application)
on server-side - see:
https://itnext.io/implementing-json-web-tokens-passport-js-in-a-javascript-application-with-react-b86b1f313436
*/ 
// HTTP request logger middleware for node.js
const logger = require('morgan');
// Enables CORS - https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
const Cors = require('cors');
// Passport's sole purpose is to authenticate requests
const passport = require('passport');

const PORT = process.env.PORT || 3001;

// The JWT and Passport configuration
require('./authentication/passport');

// Define middleware here
app.use(Cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

console.log(registerUserRoute);

var db = require("./models");

db.sequelize.sync()
.then(function() {
    app.listen(PORT, function() {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    })
});
