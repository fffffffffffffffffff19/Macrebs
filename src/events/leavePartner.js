const { Events } = require('discord.js');
const { sequelize, DataTypes } = require('../database/database');
const msgPartnerDB = require('../database/models/msgPartner')(sequelize, DataTypes);
const partnerDB = require('../database/models/partner')(sequelize, DataTypes);
const { PartnerLeave } = require('../commands/new_partner/embeds/partner_Embed');

module.exports = {
    name: Events.GuildMemberRemove,
    async execute(member) {
        const partnerChannel = await member.guild.channels.cache.get('920753297676198010');
        const exitLog = await member.guild.channels.cache.get('998624881816129597');
        await partnerDB.findOne({ where: { userId: member.id } }).then(async (user) => {
            if (!user || user === null) return;

            await msgPartnerDB.findAll({ where: { userId: user.id } }).then(async (User) => {
                if (!User || User === null) return;

                User.forEach(async (data) => {
                    const { id } = data.dataValues.id;
                    const { msgId } = data.dataValues;
                    const { userId } = data.dataValues;
                    const { guildName } = data.dataValues;
                    const { guildId } = data.dataValues;
                    const { partnerStaff } = data.dataValues;

                    await partnerChannel.messages.fetch(msgId).then((msg) => msg.delete());
                    await msgPartnerDB.destroy({ where: { userId: user.id } });
                    await partnerDB.destroy({ where: { userId: user.id } });
                    await exitLog.send({ embeds: [PartnerLeave(id, userId, guildName, guildId, partnerStaff)] });
                });
            });
        });
    },
};
