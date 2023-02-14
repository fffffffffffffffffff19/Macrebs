module.exports = (sequelize, DataTypes) => sequelize.define('PartnersBlacklist', {
    Server_Name: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    Server_Id: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    Time: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    Banidor: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    Reason: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
}, {
    timestamps: false,
});
