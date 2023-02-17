const { Events } = require('discord.js');
const { sequelize, DataTypes } = require('../database/database');

const joinedRecently = require('../database/models/joinedRecently')(sequelize, DataTypes);
const partner = require('../database/models/partner')(sequelize, DataTypes);
const msgPartner = require('../database/models/msgPartner')(sequelize, DataTypes);

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute() {
        setInterval(async () => {
            const clearDbTimeExpired = async (data, db) => {
                for (const dataFor of data) {
                    const timeDB = await dataFor.dataValues.timeExpired;
                    const split = timeDB.split('/');

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
                        db.destroy({ where: { timeExpired: timeDB } }).catch(() => console.log('Erro ao deletar o banco de dados antigo.'));
                    }
                }
            };

            const clearDb = async (data, db) => {
                for (const dataFor of data) {
                    const Ids = await dataFor.dataValues.memberId;

                    db.destroy({ where: { memberId: Ids } });
                }
            };

            await joinedRecently.findAll().then((data) => clearDb(data, joinedRecently));
            await partner.findAll().then((data) => clearDbTimeExpired(data, partner));
            await msgPartner.findAll().then((data) => clearDbTimeExpired(data, msgPartner));
        }, 18000000); // 18000000 = 5 horas
    },
};
