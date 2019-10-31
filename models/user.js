module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    screenname: { type: DataTypes.STRING, allowNull: false, primaryKey: true},
    email: { type: DataTypes.STRING, allowNull: false},
    password: { type: DataTypes.STRING, allowNull: false},
    avatar: DataTypes.STRING,
    favoriteTeamCode: DataTypes.STRING
  },
  {
      timestamps: false,
      freezeTableName: true,
      tableName: 'users'
  });

  User.associate = function (models) {
    User.belongsToMany(models.Game, { through: models.Prediction, foreignKey: 'UserScreenname'});
  };

  return User;
};
