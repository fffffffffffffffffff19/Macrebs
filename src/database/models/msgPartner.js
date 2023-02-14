module.exports = (sequelize, DataTypes) => sequelize.define('PartnerMsg', {
    User_ID: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    Msg_ID: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    Guild_Name: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    Guild_ID: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    Partner_Staff: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    Time_Expired: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
}, {
    timestamps: false,
});
