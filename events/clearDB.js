const { partnerDB, msgPartnerDB, vipStatusDB } = require('../../_discord.js/database/db');

module.exports = {
    name: 'ready',
    once: true,
    execute() {
        setInterval(async () => {
            const clearDb = async (data, db) => {
                for (const dataFor of data) {
                    const time = await dataFor.dataValues.Time_Expired;
                    const split = time.split('/');

                    const oldTime = () => {
                        const oldDate = new Date(`${split[1]}/${split[0]}/${split[2]}, 1:00:00 AM`);
                        const epochOld = oldDate.getTime() / 1000;
                        return epochOld;
                    };

                    const newTime = () => {
                        const time = new Date()
                        const epoch = time.getTime() / 1000;
                        return epoch;
                    };

                    if (oldTime() <= newTime()) {
                        await db.destroy({ where: { Time_Expired: time } }).catch(() => console.log('Erro ao deletar o banco de dados antigo.'));
                        console.log('Database was successfully cleaned.')
                    };
                }
            }

            await partnerDB.findAll().then(async partner => clearDb(partner, partnerDB));
            await msgPartnerDB.findAll().then(async msg => clearDb(msg, partnerDB));
            await vipStatusDB.findAll().then(async user => clearDb(user, partnerDB));
        }, 18000000); //18000000 = 5 horas
    },
};