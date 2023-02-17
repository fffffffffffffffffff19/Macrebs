const { ButtonStyle, ButtonBuilder, ActionRowBuilder } = require('discord.js');
const Embed = require('../embeds/requisitos_Embed');

module.exports = {
    id: 'requisitosButton',
    async execute(interaction) {
        const button = new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setCustomId('pedirParceriasButton')
            .setLabel('Solicitar parceria.')
            .setStyle(ButtonStyle.Secondary));
        await interaction.reply({ embeds: [Embed], components: [button], ephemeral: true });
    },
};
