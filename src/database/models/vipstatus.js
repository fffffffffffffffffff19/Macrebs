module.exports = (sequelize, DataTypes) => sequelize.define('Vips', {
    userId: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    vipRole: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    giver: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    timeCreated: {
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
