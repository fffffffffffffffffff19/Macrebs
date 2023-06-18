const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { resgatarEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'resgatarButton',
    async execute(interaction) {
        const invitesResgatarButton = new ButtonBuilder().setCustomId('invitesResgatarButton').setLabel('・Invites').setStyle(ButtonStyle.Secondary);
        const interacaoResgatarButton = new ButtonBuilder().setCustomId('interacaoResgatarButton').setLabel('Interação').setStyle(ButtonStyle.Secondary);
        const boostingResgatarButton = new ButtonBuilder().setCustomId('boostingResgatarButton').setLabel('Boosting・').setStyle(ButtonStyle.Secondary);
        const button = new ActionRowBuilder().addComponents(invitesResgatarButton, interacaoResgatarButton, boostingResgatarButton);

        await interaction.reply({ embeds: [resgatarEmbed()], components: [button], ephemeral: true });
    },
};
