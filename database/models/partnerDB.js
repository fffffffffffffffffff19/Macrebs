module.exports = (sequelize, DataTypes) => {
	return sequelize.define('Partners', {
		User_ID: {
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
		Partner_Staff: {
			type: DataTypes.STRING,
			unique: false,
            allowNull: false,
		},
	}, {
		timestamps: false,
	});
};