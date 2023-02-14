module.exports = (sequelize, DataTypes) => sequelize.define('joinedRecently', {
    memberId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    memberName: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
}, {
    timestamps: false,
});
