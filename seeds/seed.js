/*
*
*
*        TO POPULATE THE 'teams' TABLE, RUN THE FOLLOWING COMMAND FROM THE PROJECT ROOT:
*
*            npm run-script seed
*
*
*/

const seed = require("sequelize-fixtures");
var models = require("../models");

models.sequelize.sync()
.then(function()
{
    seed.loadFile("./seeds/nflTeamsCleanData.json", models);
});
