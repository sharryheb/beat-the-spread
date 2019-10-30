module.exports = function(sequelize, DataTypes) {
    var Prediction = sequelize.define("Prediction",
    {
        preGamePrediction: { type: DataTypes.BOOLEAN, allowNull: false },
        predictionCorrect: { type: DataTypes.BOOLEAN, defaultValue: false },
        deadline: { type: DataTypes.DATE }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'predictions'
    });

Prediction.associate = function (models) {
    Prediction.belongsTo(models.User);
    Prediction.belongsTo(models.Game);
  };

    return Prediction;
};
