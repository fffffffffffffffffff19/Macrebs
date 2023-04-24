const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Embed = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Algumas informações sobre o servidor.'),
    async execute(interaction) {
        const channel = await interaction.guild.channels.cache.get('1013814682185895957'); // spamChannel: 960641940125261874 / infoChannel: 1013814682185895957

        const sejaStaffButton = new ButtonBuilder()
            .setCustomId('sejaStaffButton')
            .setLabel('・Seja Staff')
            .setStyle(ButtonStyle.Secondary);

        const enviarSugestaoButton = new ButtonBuilder()
            .setCustomId('sugestaoButton')
            .setLabel('Enviar Sugestão')
            .setStyle(ButtonStyle.Secondary);

        const mercadinhoButton = new ButtonBuilder()
            .setCustomId('mercadinhoButton')
            .setLabel('Mercadinho')
            .setStyle(ButtonStyle.Secondary);

        const divulgacaoButton = new ButtonBuilder()
            .setCustomId('divulgacaoButton')
            .setLabel('Divulgação・')
            .setStyle(ButtonStyle.Secondary);

        const buttons = new ActionRowBuilder().addComponents(sejaStaffButton, enviarSugestaoButton, mercadinhoButton, divulgacaoButton);

        await channel.send({ embeds: [Embed], components: [buttons] });
        await interaction.reply({ content: 'msg sent!', ephemeral: true });
    },
};
