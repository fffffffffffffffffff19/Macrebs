const { ButtonStyle, ButtonBuilder, ActionRowBuilder } = require('discord.js');
const Embed = require('../embeds/requisitos_Embed');

module.exports = {
    id: 'requisitos_Button',
    async execute(interaction) {
        const button = new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setCustomId('pedirParceria_Button')
            .setLabel('Solicitar parceria.')
            .setStyle(ButtonStyle.Secondary));
        await interaction.reply({ embeds: [Embed], components: [button], ephemeral: true });
    },
};
