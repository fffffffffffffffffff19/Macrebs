module.exports = (sequelize, DataTypes) => sequelize.define('commandDelay', {
    memberId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
}, {
    timestamps: false,
});
