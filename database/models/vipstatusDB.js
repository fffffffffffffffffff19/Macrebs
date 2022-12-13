module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Vips', {
        User_ID: {
			type: DataTypes.STRING,
			unique: false,
            allowNull: false,
		},
        VipRole: {
			type: DataTypes.STRING,
			unique: false,
            allowNull: false,
		},
        Giver: {
			type: DataTypes.STRING,
			unique: false,
            allowNull: false,
		},
		Time_Created: {
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
};