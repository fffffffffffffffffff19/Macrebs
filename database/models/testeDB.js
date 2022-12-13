module.exports = (sequelize, DataTypes) => {
	return sequelize.define('Testes', {
		UserID: {
			type: DataTypes.STRING,
			unique: true,
            allowNull: false,
		},
		TimeCreate: {
			type: DataTypes.STRING,
			unique: false,
            allowNull: false,
		},
		TimeExpired: {
			type: DataTypes.STRING,
			unique: false,
            allowNull: false,
		},
	}, {
		timestamps: false,
	});
};