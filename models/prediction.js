module.exports = function(sequelize, DataTypes) {
    var Prediction = sequelize.define("Prediction",
    {
        preGamePrediction: { type: DataTypes.BOOLEAN, allowNull: false },
        predictionCorrect: { type: DataTypes.BOOLEAN, defaultValue: false },
        GameId: {
            type: DataTypes.INTEGER,
            primaryKey: false,
            references: {
                model: 'Game',
                key: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
            unique: 'unique-game-per-user'
        },
        UserScreenname: {
            type: DataTypes.STRING,
            primaryKey: false,
            references: {
                model: 'User',
                key: 'screenname'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
            unique: 'unique-game-per-user'
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'predictions'
    });

    Prediction.associate = function (models) {
        Prediction.belongsTo(models.User, { foreignKey: 'UserScreenname', targetKey: 'screenname' });
        Prediction.belongsTo(models.Game, { foreignKey: 'GameId', targetKey: 'id' });
    };

    return Prediction;
};
