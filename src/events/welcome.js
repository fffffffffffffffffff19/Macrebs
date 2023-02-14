/* eslint-disable no-unused-vars */
const { Events } = require('discord.js');
const { WelcomeChat } = require('../embeds/eventsEmbed/welcome_Embed');
const { joinedRecently } = require('../database/database');

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        const icon = await member.user.displayAvatarURL({ dynamic: true, size: 4096 });
        const memberID = await member.id;
        const memberDisplayName = await member.displayName;
        const guildId = await member.guild.id;
        const guildSize = await member.guild.memberCount;
        const channelID = '889552544311943168';
        const channel = await member.guild.channels.cache.get(channelID);
        const staffRole = '<@&936599914014720041>';

        if (guildId !== '889320497244962826') return;
        if (await member.user.bot) return;

        const oldDB = await joinedRecently.findOne({ where: { memberId: memberID } });

        const timeOut = (db) => {
            setTimeout(async () => {
                try {
                    await db.destroy();
                } catch (e) { console.log(e); }
            }, 420000);
        };

        try {
            if (oldDB !== null) {
                timeOut(oldDB);
            } else {
                const newDB = await joinedRecently.create({ memberId: memberID, memberName: memberDisplayName });

                await channel.send({ content: `${staffRole}`, embeds: [WelcomeChat(icon, memberID, guildSize)] })
                    .then((msg) => setTimeout(() => msg.delete().catch(() => console.error('WelcomeMensageError: Msg not exist.')), 420000));
                timeOut(newDB);
            }
        } catch (e) { console.log(e); }
    },
};
