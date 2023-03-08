const { ActivityType, Events, Collection } = require('discord.js');
const { sync } = require('../database/database');

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        await sync(); // Syncronizar o banco de dados

        await client.guilds.cache.forEach(async (guild) => { // Sair de guildas que não estão no database
            const list = ['889320497244962826', '946032187579441154'];

            if (!list.includes(guild.id)) await guild.leave();
        });

        client.guildStatus = new Collection();

        await client.guilds.cache.map((guild) => client.guildStatus.set(guild.name, { // lista de servidores onde o bot está
            Members: guild.memberCount,
            Id: guild.id,
            OnwerId: guild.ownerId,
        }));

        const guilds = Object.fromEntries(client.guildStatus.entries());
        const users = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

        await client.user.setUsername('艾 Macrebs');
        // await client.user.setAvatar('https://i.imgur.com/fuNXuI5.png');
        await client.user.setActivity('/macrebs ~ 🥞', { type: ActivityType.Playing });
        await client.user.setStatus('idle');

        console.log(`\n⠀* Macrebs - Bot\n⠀* Database Synced!\nTotal users: ${users}\nGuilds:`, guilds);
    },
};
