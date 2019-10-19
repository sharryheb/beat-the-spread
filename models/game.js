module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("game",
    {
        weekNumber: { type: DataTypes.INTEGER, allowNull: false },
        gameTime: { type: DataTypes.DATE, allowNull: false },
        homeTeamId: { type: DataTypes.INTEGER, allowNull: false },
        awayTeamId: { type: DataTypes.INTEGER, allowNull: false },
        preGameSpread: { type: DataTypes.INTEGER, allowNull: false },
        favoredTeamId: { type: DataTypes.INTEGER, allowNull: false },
        winTeamScore: { type: DataTypes.INTEGER, defaultValue: 0 },
        loseTeamScore: { type: DataTypes.INTEGER, defaultValue: 0 },
        spreadCovered: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {
      timestamps: false
    });

    return Game;
};
