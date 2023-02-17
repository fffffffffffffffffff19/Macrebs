const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { sugestaoReplyEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'sugestaoMenu',
    async execute(interaction) {
        const button = new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setCustomId('sugestaoButton')
            .setLabel('Enviar uma sugestão')
            .setStyle(ButtonStyle.Secondary));

        await interaction.reply({ embeds: [sugestaoReplyEmbed()], components: [button], ephemeral: true });
    },
};
