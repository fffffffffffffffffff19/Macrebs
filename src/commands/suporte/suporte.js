const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const replyEmbed = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suporte')
        .setDescription('Mensagens do suporte'),
    async execute(interaction) {
        const channel = await interaction.guild.channels.cache.get('1019077752390942792'); // spamChannel: 960641940125261874 / mainChannel: 1019077752390942792
        const ajudaButton = new ButtonBuilder()
            .setCustomId('ajudaButton')
            .setLabel('・Ajuda')
            .setStyle(ButtonStyle.Secondary);
        const denunciaButton = new ButtonBuilder()
            .setCustomId('denunciaButton')
            .setLabel('Denuncia')
            .setStyle(ButtonStyle.Secondary);
        const duvidaButton = new ButtonBuilder()
            .setCustomId('duvidaButton')
            .setLabel('Dúvida')
            .setStyle(ButtonStyle.Secondary);
        const desabafoButton = new ButtonBuilder()
            .setCustomId('desabafoButton')
            .setLabel('Desabafo・')
            .setStyle(ButtonStyle.Secondary);
        const buttons = new ActionRowBuilder().addComponents(ajudaButton, denunciaButton, duvidaButton, desabafoButton);

        await channel.send({ embeds: [replyEmbed], components: [buttons] });
        await interaction.reply({ content: 'sent!!', ephemeral: true });
    },
};
