const { partnerDB, msgPartnerDB } = require('../database/db');
const { PartnerExpired } = require('../commands/new-partner/embeds/partner_Embed');
const { timeWeek } = require('../bot-tools/time');
const { guildId } = require('../config');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        setInterval(async () => {
            await partnerDB.findAll({ where: { Time_Expired: timeWeek().timeNow } }).then(async dbData => {
                for (const db of dbData) {
                    const userID = await db.dataValues.User_ID;
                    const date = await db.dataValues.Time_Expired;
                    const guild = await client.guilds.cache.get(guildId);
                    const partnerChannel = await guild.channels.cache.get('1013814682185895957');
                    const logChannel = await guild.channels.cache.get('1035919874431651851');
                    const user = await guild.members.fetch(userID);
                    const role = await guild.roles.cache.find(role => role.name === 'Partners');

                    if (date.includes(timeWeek().timeNow)) {
                        try {
                            await msgPartnerDB.destroy({ where: { Time_Expired: timeWeek().timeNow } });
                            await partnerDB.destroy({ where: { Time_Expired: timeWeek().timeNow } });
                            await user.roles.remove(role).catch(() => logChannel.send({ content: `**Houve um erro ao retirar o cargo de parceiro do ${user}.**` }));
                            await user.send({ embeds: [PartnerExpired(user, partnerChannel)] }).catch(() => logChannel.send({ content: `O representante ${user} não tem a dm aberta.\n*Com isso não foi possivel enviar a msg de renovação.*` }));
                        } catch (e) { console.log(e); }
                    }
                }
            });
        }, 18000000); //18000000 = 5 horas
    },
};

