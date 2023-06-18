const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const replyEmbed = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rewards')
        .setDescription('Mensagens do suporte'),
    async execute(interaction) {
        const channel = await interaction.guild.channels.cache.get('1019082474229334068'); // spamChannel: 960641940125261874 / infoChannel: 1019082474229334068

        const invitesButton = new ButtonBuilder()
            .setCustomId('invitesButton')
            .setLabel('・Invites')
            .setStyle(ButtonStyle.Secondary);
        const interacaoButton = new ButtonBuilder()
            .setCustomId('interacaoButton')
            .setLabel('Interação')
            .setStyle(ButtonStyle.Secondary);
        const boostingButton = new ButtonBuilder()
            .setCustomId('boostingButton')
            .setLabel('Boosting・')
            .setStyle(ButtonStyle.Secondary);
        const resgatarButton = new ButtonBuilder()
            .setCustomId('resgatarButton')
            .setLabel('Resgatar')
            .setStyle(ButtonStyle.Danger);

        const button = new ActionRowBuilder().addComponents(invitesButton, interacaoButton, boostingButton, resgatarButton);

        await channel.send({ embeds: [replyEmbed], components: [button] });
        await interaction.reply({ content: 'sent!!', ephemeral: true });
    },
};
