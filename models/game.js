module.exports = function(sequelize, DataTypes) {
    var Game = sequelize.define("Game",
    {
        weekNumber: { type: DataTypes.INTEGER, allowNull: false },
        gameTime: { type: DataTypes.DATE, allowNull: false },
        homeTeamCode: { type: DataTypes.STRING, allowNull: false },
        awayTeamCode: { type: DataTypes.STRING, allowNull: false },
        preGameSpread: { type: DataTypes.INTEGER, defaultValue: 0 },
        favoredTeamCode: { type: DataTypes.STRING, defaultValue: -1 },
        homeTeamScore: { type: DataTypes.INTEGER, defaultValue: 0 },
        awayTeamScore: { type: DataTypes.INTEGER, defaultValue: 0 },
        spreadCovered: { type: DataTypes.BOOLEAN, defaultValue: false },
        updatedAt: { type: DataTypes.DATE, defaultValue: null }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'games'
    });

    Game.associate = function (models) {
        Game.belongsToMany(models.User, { through: models.Prediction, foreignKey: 'GameId'});
    };

    return Game;
};
