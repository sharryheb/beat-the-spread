module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("game",
    {
        weekNumber: { type: DataTypes.INTEGER, allowNull: false },
        gameTime: { type: DataTypes.DATE, allowNull: false },
        homeTeamCode: { type: DataTypes.STRING, allowNull: false },
        awayTeamCode: { type: DataTypes.STRING, allowNull: false },
        preGameSpread: { type: DataTypes.INTEGER, defaultValue: 0 },
        favoredTeamId: { type: DataTypes.INTEGER, defaultValue: -1 },
        spreadCovered: { type: DataTypes.INTEGER, defaultValue: 0 },
        winTeamScore: { type: DataTypes.INTEGER, defaultValue: 0 },
        loseTeamScore: { type: DataTypes.INTEGER, defaultValue: 0 },
        spreadCovered: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {
        timestamps: false
    });

    return Game;
};
