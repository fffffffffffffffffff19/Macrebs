const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const partnerDB = require('../database/models/partnerDB')(sequelize, Sequelize.DataTypes);
const vipStatusDB = require('../database/models/vipstatusDB')(sequelize, Sequelize.DataTypes);
const testeDB = require('../database/models/testeDB')(sequelize, Sequelize.DataTypes);
const msgPartnerDB = require('../database/models/msgPartnerDB')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

module.exports = {
    sync: async () => { await sequelize.sync({ force }).then(() => setTimeout(() => { console.log('Database synced') }, 1000)).catch(console.error) },
    testeDB,
    vipStatusDB,
    partnerDB,
    msgPartnerDB,
}