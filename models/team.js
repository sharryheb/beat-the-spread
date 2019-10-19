module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define("team",
    {
        Key: { type: DataTypes.STRING, allowNull: false },
        City: { type: DataTypes.STRING, allowNull: false },
        FullName: { type: DataTypes.STRING, allowNull: false },
        Name: { type: DataTypes.STRING, allowNull: false },
        Conference: { type: DataTypes.STRING, allowNull: false },
        Division: { type: DataTypes.STRING, allowNull: false },
        ByeWeek: { type: DataTypes.INTEGER, allowNull: false },
        PrimaryColor: { type: DataTypes.STRING, allowNull: false },
        SecondaryColor: { type: DataTypes.STRING, allowNull: false },
        TertiaryColor: { type: DataTypes.STRING, allowNull: false },
        WikipediaLogoUrl: { type: DataTypes.STRING, allowNull: false },
        WikipediaWordMarkUrl: { type: DataTypes.STRING, allowNull: false },
        StadiumGeoLat: { type: DataTypes.DECIMAL, allowNull: false },
        StadiumGeoLong: { type: DataTypes.DECIMAL, allowNull: false },
        StadiumPlayingSurface: { type: DataTypes.STRING, allowNull: false },
        StadiumType: { type: DataTypes.STRING, allowNull: false }
    },
    {
        timestamps: false
    });

    return Team;
};
