module.exports = (sequelize, DataTypes) => sequelize.define('partnersBlacklist', {
    serverName: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    serverId: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    banedTime: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    staffHasMade: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    reason: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
}, {
    timestamps: false,
});
