const { SlashCommandBuilder } = require('discord.js');
const { VipLog, InteraReply } = require('./embeds/setvip_Embed');
const { sequelize, DataTypes } = require('../../database/database');
const vipStatusDB = require('../../database/models/vipstatus')(sequelize, DataTypes);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setvip')
        .setDescription('Give vip for a member')
        .addMentionableOption((option) => option.setName('member').setDescription('Mention something').setRequired(true))
        .addStringOption((option) => option.setName('vips').setDescription('List of vips').setRequired(true)
            .addChoices({ name: '₊˚꒰⭐ Macrabizant ⭐꒱・₊', value: '₊˚꒰⭐ Macrabizant ⭐꒱・₊' })
            .addChoices({ name: '₊˚꒰⭐ Awibilay ⭐꒱・₊', value: '₊˚꒰⭐ Awibilay ⭐꒱・₊' })
            .addChoices({ name: '₊˚꒰⭐ Dibilowas ⭐꒱・₊', value: '₊˚꒰⭐ Dibilowas ⭐꒱・₊' }))
        .addStringOption((option) => option.setName('time').setDescription('Tempo que a pessoa terá de vip').setRequired(true)),
    async execute(interaction) {
        const member = await interaction.options.getMentionable('member');
        const vip = await interaction.options.getString('vips');
        const vipTime = await interaction.options.getString('time');
        const logChannel = await interaction.guild.channels.cache.get('917393598415249468');
        const vipRole = await interaction.guild.roles.cache.find((roleFind) => roleFind.name == vip);

        const Time = () => {
            const date = new Date();
            const formatter = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
            const times = { timeNow: formatter.format(date), timeSet: formatter.format(date.setDate(date.getDate() + Number(vipTime))) };
            return times;
        };

        await vipStatusDB.create({ userId: member.id, vipRole: vipRole.name, giver: interaction.user.id, timeCreated: Time().timeNow, timeExpired: Time().timeSet });
        await member.roles.add(vipRole);
        await logChannel.send({ embeds: [VipLog(member, vipRole, Time().timeNow, Time().timeSet)] });
        await interaction.reply({ embeds: [InteraReply(member, logChannel)], ephemeral: true });
    },
};
