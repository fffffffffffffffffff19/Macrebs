const { SlashCommandBuilder } = require('discord.js');
const { VipLog, InteraReply } = require('./embeds/setvip_Embed');
const { vipStatusDB } = require('../../../database/db');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setvip')
        .setDescription('Give vip for a member')
        .addMentionableOption(option => option.setName('member').setDescription('Mention something').setRequired(true))
        .addStringOption(option => option.setName('vips').setDescription('List of vips').setRequired(true)
            .addChoices({ name: '₊˚꒰⭐ Macrabizant ⭐꒱・₊', value: '₊˚꒰⭐ Macrabizant ⭐꒱・₊' })
            .addChoices({ name: '₊˚꒰⭐ Awibilay ⭐꒱・₊', value: '₊˚꒰⭐ Awibilay ⭐꒱・₊' })
            .addChoices({ name: '₊˚꒰⭐ Dibilowas ⭐꒱・₊', value: '₊˚꒰⭐ Dibilowas ⭐꒱・₊' }))
        .addStringOption(option => option.setName('time').setDescription('Tempo que a pessoa terá de vip').setRequired(true)),
    async execute(interaction) {
        const member = await interaction.options.getMentionable('member');
        const vip = await interaction.options.getString('vips');
        const vipTime = await interaction.options.getString('time');
        const logChannel = await interaction.guild.channels.cache.get('917393598415249468');
        const role = await interaction.guild.roles.cache.find(role => role.name == vip);

        const Time = () => {
            const date = new Date();
            const formatter = new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "2-digit", day: "2-digit" });
            const times = { timeNow: formatter.format(date), timeSet: formatter.format(date.setDate(date.getDate() + Number(vipTime))) };
            return times;
        };

        await interaction.reply({ embeds: [InteraReply(member, logChannel)], ephemeral: true });
        await member.roles.add(role);
        await logChannel.send({ embeds: [VipLog(member, role, Time().timeNow, Time().timeSet)] });
        await vipStatusDB.create({ User_ID: member.id, VipRole: role.name, Giver: interaction.user.id, Time_Created: Time().timeNow, Time_Expired: Time().timeSet });
    },
};
