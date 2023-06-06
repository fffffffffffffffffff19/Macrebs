const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const replyEmbed = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('guia-staff')
        .setDescription('Guias da staff'),
    async execute(interaction) {
        const channel = await interaction.guild.channels.cache.get('1021640639974211645');

        const moderacaoButton = new ButtonBuilder()
            .setCustomId('moderacaoButton')
            .setLabel('・Moderação')
            .setStyle(ButtonStyle.Secondary);
        const parceriaButton = new ButtonBuilder()
            .setCustomId('parceriaButton')
            .setLabel('Parceria')
            .setStyle(ButtonStyle.Secondary);
        const recepcaoButton = new ButtonBuilder()
            .setCustomId('recepcaoButton')
            .setLabel('Recepção')
            .setStyle(ButtonStyle.Secondary);
        const adminButton = new ButtonBuilder()
            .setCustomId('adminButton')
            .setLabel('Admin・')
            .setStyle(ButtonStyle.Secondary);

        const buttons = new ActionRowBuilder()
            .addComponents(moderacaoButton, parceriaButton, recepcaoButton, adminButton);

        await channel.send({ embeds: [replyEmbed], components: [buttons] }); // terminar de fazer, por os botões para ser escutado
        await interaction.reply({ content: 'sent!!!', ephemeral: true });
    },
};
