module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    username: { type: DataTypes.STRING, allowNull: false},
    email: { type: DataTypes.STRING, allowNull: false},
    password: { type: DataTypes.STRING, allowNull: false},
    avatar: DataTypes.STRING,
    favoriteTeamId: { type: DataTypes.STRING, defaultValue: -1},
  },
  {
      timestamps: false
  });

  return User;
};
