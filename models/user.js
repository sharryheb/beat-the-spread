module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: { type: DataTypes.STRING, allowNull: false},
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

  return User;
};
