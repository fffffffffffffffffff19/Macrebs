const { Events } = require('discord.js');
const { sequelize, DataTypes } = require('../database/database');
const partnerDB = require('../database/models/partner')(sequelize, DataTypes);
const msgPartnerDB = require('../database/models/msgPartner')(sequelize, DataTypes);
const { PartnerExpired } = require('../commands/new_partner/embeds/partner_Embed');
const { timeWeek } = require('../tools/time');
const { guildId } = require('../../config');

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        setInterval(async () => {
            await partnerDB.findAll({ where: { timeExpired: timeWeek().timeNow } }).then(async (db) => {
                db.forEach(async (data) => {
                    const { userId } = data.dataValues;
                    const { expiredTime } = data.dataValues;
                    const guild = await client.guilds.cache.get(guildId);
                    const partnerChannel = await guild.channels.cache.get('1013814682185895957');
                    const logChannel = await guild.channels.cache.get('1035919874431651851');
                    const user = await guild.members.fetch(userId);
                    const partnerRole = await guild.roles.cache.find((role) => role.name === 'Partners');

                    if (expiredTime == timeWeek().oneWeek) {
                        try {
                            await msgPartnerDB.destroy({ where: { timeExpired: timeWeek().timeNow } });
                            await partnerDB.destroy({ where: { timeExpired: timeWeek().timeNow } });
                            await user.roles.remove(partnerRole).catch(() => logChannel.send({ content: `**Houve um erro ao retirar o cargo de parceiro do ${user}.**` }));
                            await user.send({ embeds: [PartnerExpired(user, partnerChannel)] }).catch(() => logChannel.send({ content: `O representante ${user} não tem a dm aberta.\n*Com isso não foi possivel enviar a msg de renovação.*` }));
                        } catch (e) { console.log(e); }
                    }
                });
            });
        }, 18000000); // 18000000 = 5 horas
    },
};
