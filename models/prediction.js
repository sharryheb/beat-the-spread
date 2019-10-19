module.exports = function(sequelize, DataTypes) {
    var Prediction = sequelize.define("prediction",
    {
        userid: { type: DataTypes.STRING, allowNull: false },
        gameid: { type: DataTypes.STRING, allowNull: false },
        preGamePrediction: { type: DataTypes.BOOLEAN, allowNull: false },
        predictionCorrect: { type: DataTypes.BOOLEAN, defaultValue: false },
        deadline: { type: DataTypes.DATE }
    },
    {
      timestamps: false
    });

    return Prediction;
};
