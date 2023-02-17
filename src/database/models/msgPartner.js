module.exports = (sequelize, DataTypes) => sequelize.define('partnerMsg', {
    userId: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    msgId: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    guildName: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    guildId: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    partnerStaff: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    timeExpired: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
}, {
    timestamps: false,
});
