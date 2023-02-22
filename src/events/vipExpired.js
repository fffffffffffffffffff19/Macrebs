const { sequelize, DataTypes } = require('../database/database');
const vipStatusDB = require('../database/models/vipstatus')(sequelize, DataTypes);
const { VipExpired } = require('../commands/setvip/embeds/setvip_Embed');
const { timeMonth } = require('../tools/time');
const { guildId } = require('../../config');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        setInterval(async () => {
            await vipStatusDB.findAll({ where: { timeExpired: timeMonth().timeNow } }).then(async (time) => {
                time.foreach(async (data) => {
                    const { timeExpired } = data.dataValues;

                    if (!timeExpired == timeMonth().timeNow) return;

                    const guild = await client.guilds.cache.get(guildId);
                    const lojaChannel = await guild.channels.cache.get('909089340838281276');
                    const schiavonDM = await guild.members.cache.get('249955734958243840');
                    const { vipRole } = await data.dataValues;
                    const { userId } = await data.dataValues;
                    const user = await guild.members.fetch(userId);
                    const role = await guild.roles.cache.find((roleFind) => roleFind.name == vipRole);

                    await vipStatusDB.destroy({ timeExpired: timeMonth().timeNow });
                    await user.roles.remove(role).catch(() => schiavonDM.send({ content: `*<@${userId}> não consegui retirar o cargo. vipExpired=Linha24*` }));
                    await user.send({ embeds: [VipExpired(user, lojaChannel)] }).catch(() => schiavonDM.send({ content: `*<@${userId}> não tem a dm aberta, não consegui enviar informações do vip expirado.*` }));
                });
            });
        }, 18000000); // 18000000 = 5 horas
    },
};
