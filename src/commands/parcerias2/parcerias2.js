const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const channelSend = require('./embeds/channelSendEmbed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('new-partner2')
        .setDescription('Novo sistema de parceria.'),
    async execute(interaction) {
        const channel = await interaction.guild.channels.cache.get(); // spamChannel: 960641940125261874 / mainChannel: 1054807090138464306
        const button = new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setCustomId('requisitosButton')
            .setLabel('Ler os requisitos.')
            .setStyle(ButtonStyle.Secondary));

        await channel.send({ embeds: [channelSend], components: [button] });
        await interaction.reply({ content: 'Sent!!', ephemeral: true });
    },
};
