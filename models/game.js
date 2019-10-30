module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game",
    {
        weekNumber: { type: DataTypes.INTEGER, allowNull: false },
        gameTime: { type: DataTypes.DATE, allowNull: false },
        homeTeamCode: { type: DataTypes.STRING, allowNull: false },
        awayTeamCode: { type: DataTypes.STRING, allowNull: false },
        preGameSpread: { type: DataTypes.INTEGER, defaultValue: 0 },
        favoredTeamCode: { type: DataTypes.INTEGER, defaultValue: -1 },
        homeTeamScore: { type: DataTypes.INTEGER, defaultValue: 0 },
        awayTeamScore: { type: DataTypes.INTEGER, defaultValue: 0 },
        spreadCovered: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {
        timestamps: false
    });

    return Game;
};
