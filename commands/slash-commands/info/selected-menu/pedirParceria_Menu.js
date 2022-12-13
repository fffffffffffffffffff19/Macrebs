const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Embed = require('../embeds/requisitos_Embed');

module.exports = {
    id: 'parceria_Menu',
    async execute(interaction) {
        const button = new ActionRowBuilder()
            .addComponents(new ButtonBuilder()
            .setCustomId('pedir-parceria_Button')
            .setLabel('Criar ticket')
            .setStyle(ButtonStyle.Secondary))

        await interaction.reply({ embeds: [Embed], components: [button], ephemeral: true });
    }
}