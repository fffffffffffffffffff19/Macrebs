const { Events } = require('discord.js');
const { WelcomeChat } = require('../embeds/eventsEmbed/welcome_Embed');
const { sequelize, DataTypes } = require('../database/database');
const joinedRecently = require('../database/models/joinedRecently')(sequelize, DataTypes);

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        const guildId = await member.guild.id;

        if (guildId !== '889320497244962826') return;
        if (await member.user.bot) return;
        if (await member.user.avatar === null) return;

        const requiredTime = new Date();
        requiredTime.setDate(requiredTime.getDate() - 3);
        const userAge = new Date(await member.user.createdTimestamp);

        if (userAge >= requiredTime) return;

        const icon = await member.user.displayAvatarURL({ dynamic: true, size: 4096 });
        const memberID = await member.id;
        const memberDisplayName = await member.displayName;
        const guildSize = await member.guild.memberCount;
        const channel = await member.guild.channels.cache.get('889552544311943168');
        const staffRole = '<@&936599914014720041>';

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
                // error, verificar se há db da pessoa
                const newDB = await joinedRecently.create({ memberId: memberID, memberName: memberDisplayName });

                await channel.send({ content: `${staffRole}`, embeds: [WelcomeChat(icon, memberID, guildSize)] }).then((msg) => setTimeout(() => msg.delete().catch(() => console.error('WelcomeMensageError: Msg not exist.')), 420000));

                timeOut(newDB);
            }
        } catch (e) { console.log(e); }
    },
};
