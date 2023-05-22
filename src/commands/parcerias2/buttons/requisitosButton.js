const { ButtonStyle, ButtonBuilder, ActionRowBuilder } = require('discord.js');
const requisitosEmbed = require('../embeds/requisitosEmbed');

module.exports = {
    id: 'requisitosButton',
    async execute(interaction) {
        const button = new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setCustomId('pedirParceriasButton')
            .setLabel('Solicitar parceria.')
            .setStyle(ButtonStyle.Secondary));
        await interaction.reply({ embeds: [requisitosEmbed], components: [button], ephemeral: true });
    },
};
