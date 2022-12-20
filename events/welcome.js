const { WelcomeChat, WelcomeDM } = require('../global_Embeds/events/welcome_Embed');
const { userApi } = require('../api-references/userAPI');

module.exports = {
	name: 'guildMemberAdd',
	async execute(member) {
		const icon = await member.user.displayAvatarURL({ dynamic: true, size: 4096 });
		const memberID = await member.id;
		const memberName = await member.displayName;
		const guildID = await member.guild.id;
		const guildSize = await member.guild.memberCount;
		const channelID = '889552544311943168';
		const channel = await member.guild.channels.cache.get(channelID);
		const staffRole = '<@&936599914014720041>';
		const api = await userApi(`${memberID}`);

		if (api.bot) return
		if (guildID == '889320497244962826') {
			try {
				await channel.send({ content: `${staffRole}`, embeds: [WelcomeChat(icon, memberID, guildSize)] }).then(msg => { setTimeout(() => msg.delete(), 420000); });
				setTimeout(async () => { await member.send({ embeds: [WelcomeDM()] }).catch(error => { console.log(`Something went wrong while I tried to send you a DM. User: ${memberName}`) }) }, 10000);
			} catch (e) { console.log(e); }
		}
	}
}
