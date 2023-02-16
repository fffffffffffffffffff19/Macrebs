const { ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    id: 'sugestao_Button',
    async execute(interaction) {
        const Modal = new ModalBuilder().setCustomId('sugestao_Modal').setTitle('sugestao');
        const title = new TextInputBuilder().setCustomId('title-sugestao').setLabel('Envie o título da sua sugestão').setStyle(TextInputStyle.Short);
        const sugestao = new TextInputBuilder().setCustomId('sugestao').setLabel('Sua sugestão').setStyle(TextInputStyle.Paragraph);
        const titleActionRow = new ActionRowBuilder().addComponents(title);
        const sugestaoActionRow = new ActionRowBuilder().addComponents(sugestao);

        Modal.addComponents(titleActionRow, sugestaoActionRow);

        await interaction.showModal(Modal);
    },
};
