const { SlashCommandBuilder } = require('discord.js');
const { himawari, cantinhoDosArtistas, outrosServidores, chainedStore } = require('./embeds/serverFriendsEmbed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('servers-friends')
        .setDescription('Pau no cu da aliança "preto"'),
    async execute(interaction) {
        const channelSend = interaction.guild.channels.cache.get('980457215615975475');

        await channelSend.send({ embeds: [himawari(), chainedStore(), cantinhoDosArtistas(), outrosServidores()] });
        await interaction.reply({ content: 'Sent!!', ephemeral: true });
    },
};
