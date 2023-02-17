module.exports = (sequelize, DataTypes) => sequelize.define('partners', {
    userId: {
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
    partnerStaff: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
}, {
    timestamps: false,
});
