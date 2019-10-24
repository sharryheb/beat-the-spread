/*
*
*
*        TO POPULATE THE DATABASE WITH STATIC SEED DATA,
*        RUN THE FOLLOWING COMMAND FROM THE PROJECT ROOT:
*
*            npm run seed
*
*
*/

const seed = require("sequelize-fixtures");
var models = require("../models");

models.sequelize.sync()
.then(function()
{
    seed.loadFiles([
        "./seeds/TeamsData.json",
        "./seeds/GamesData.json",
        ], models)
    .then(()=>models.sequelize.close());
});
