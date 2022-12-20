const { vipStatusDB } = require('../database/db');
const { VipExpired } = require('../commands/setvip/embeds/setvip_Embed');
const { timeMonth } = require('../bot-tools/time');
const { guildId } = require('../config');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        setInterval(async () => {
            await vipStatusDB.findAll({ where: { Time_Expired: timeMonth().timeNow } }).then(async Time => {
                for (const db of Time) {
                    const userID = await db.dataValues.User_ID;
                    const vip = await db.dataValues.VipRole;
                    const date = await db.dataValues.Time_Expired;
                    const lojaChannel = await guild.channels.cache.get('909089340838281276');
                    const schiavonDM = await guild.members.cache.get('249955734958243840');
                    const guild = await client.guilds.cache.get(guildId);
                    const user = await guild.members.fetch(db.dataValues.User_ID);
                    const role = await guild.roles.cache.find(role => role.name === vip);

                    if (date.includes(timeMonth().timeNow)) {
                        await vipStatusDB.destroy({ where: { Time_Expired: timeMonth().timeNow } });
                        await user.roles.remove(role).catch(() => schiavonDM.send({ content: `*<@${userID}> não consegui retirar o cargo. vip_expired=Linha24*` }));
                        await user.send({ embeds: [VipExpired(user, lojaChannel)] }).catch(() => schiavonDM.send({ content: `*<@${userID}> não tem a dm aberta.*` }));
                    }
                }
            })
        }, 18000000); //18000000 = 5 horas
    }
}