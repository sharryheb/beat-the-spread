module.exports = function(sequelize, DataTypes) {
    var Prediction = sequelize.define("Prediction",
    {
        username: { type: DataTypes.STRING, allowNull: false },
        gameid: { type: DataTypes.STRING, allowNull: false },
        preGamePrediction: { type: DataTypes.BOOLEAN, allowNull: false },
        predictionCorrect: { type: DataTypes.BOOLEAN, defaultValue: false },
        deadline: { type: DataTypes.DATE }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'predictions'
    });

    return Prediction;
};
