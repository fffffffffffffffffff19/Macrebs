const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Reply = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('parcerias')
        .setDescription('Criar msg de parcerias.'),
    async execute(interaction) {
        const channel = await interaction.guild.channels.cache.get('1054807090138464306'); // spamChannel: 960641940125261874 / mainChannel: 1054807090138464306
        const button = new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setCustomId('requisitosButton')
            .setLabel('Ler os requisitos.')
            .setStyle(ButtonStyle.Secondary));

        await channel.send({ embeds: [Reply], components: [button] });
        await interaction.reply({ content: 'Sent!!', ephemeral: true });
    },
};
