const { Events } = require('discord.js');
const { sequelize, DataTypes } = require('../database/database');
const joinedRecently = require('../database/models/joinedRecently')(sequelize, DataTypes);
const partner = require('../database/models/partner')(sequelize, DataTypes);
const msgPartner = require('../database/models/msgPartner')(sequelize, DataTypes);

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute() {
        const clearDbTimeExpired = async (data, db) => {
            data.forEach((dataFor) => {
                const { timeExpired } = dataFor.dataValues;
                const split = timeExpired.split('/');

                const oldTime = () => {
                    const oldDate = new Date(`${split[1]}/${split[0]}/${split[2]}, 1:00:00 AM`);
                    const epochOld = oldDate.getTime() / 1000;
                    return epochOld;
                };

                const newTime = () => {
                    const time = new Date();
                    const epoch = time.getTime() / 1000;
                    return epoch;
                };

                if (oldTime() <= newTime()) {
                    db.destroy({ where: { timeExpired: timeExpired } }).catch(() => console.log('Erro ao deletar o banco de dados antigo.'));
                }
            });
        };

        const clearDb = async (data, db) => {
            data.forEach((dataFor) => {
                const { memberId } = dataFor.dataValues;

                db.destroy({ where: { memberId: memberId } });
            });
        };

        await joinedRecently.findAll().then((data) => clearDb(data, joinedRecently));
        await partner.findAll().then((data) => clearDbTimeExpired(data, partner));
        await msgPartner.findAll().then((data) => clearDbTimeExpired(data, msgPartner));
    },
};
