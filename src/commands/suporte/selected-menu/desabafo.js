const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    id: 'desabafoMenu',
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId('desabafoModal')
            .setTitle('Desabafo Anônimo');
        const titulo = new TextInputBuilder()
            .setCustomId('tituloDesabafo')
            .setLabel('Qual o título do seu desabafo?')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);
        const desabafo = new TextInputBuilder()
            .setCustomId('textoDesabafo')
            .setLabel('Escreva o seu desabafo.')
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true);
        const tituloActionRow = new ActionRowBuilder().addComponents(titulo);
        const desabafoActionRow = new ActionRowBuilder().addComponents(desabafo);

        modal.addComponents(tituloActionRow, desabafoActionRow);

        await interaction.showModal(modal);
    },
};
