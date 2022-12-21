const { ActivityType } = require('discord.js');
const { sync } = require('../database/db');

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		const guilds = client.guilds.cache.map(guild => guild.name);
		const users = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

		await client.user.setUsername('艾 Macrebs');
		await client.user.setAvatar('https://i.imgur.com/fuNXuI5.png');
		await client.user.setActivity('/macrebs ~ 🥞', { type: ActivityType.Playing });
		await client.user.setStatus('idle');
		console.log(`Ready! Logged in as ${client.user.tag}.\n`);
		await sync();
		setTimeout(() => { console.log(`\nHave ${users} users.\nGuilds: ${guilds}`); }, 1000);
	},
};

/* const { ActivityType } = require('discord.js');
const { sync } = require('../database/db');

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		const guilds = client.guilds.cache.map(guild => guild.name);
		const users = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

		await client.user.setUsername('!DeverasBot');
		//await client.user.setAvatar('https://i.pinimg.com/564x/dc/e9/ae/dce9ae24e7c4f0cb3d861391f0f8f384.jpg');
		await client.user.setActivity('/macrebs ~ 🥞', { type: ActivityType.Playing });
		await client.user.setStatus('idle');
		console.log(`Ready! Logged in as ${client.user.tag}.\n`);
		await sync();
		setTimeout(() => { console.log(`\nHave ${users} users.\nGuilds: ${guilds}`); }, 1000);
	},
}; */
