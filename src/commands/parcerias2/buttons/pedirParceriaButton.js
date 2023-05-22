const { ActionRowBuilder, TextInputStyle, ModalBuilder, TextInputBuilder } = require('discord.js');

module.exports = {
    id: 'pedirParceriasButton',
    async execute(interaction) {
        const modalMenu = new ModalBuilder()
            .setCustomId('enviarInvite')
            .setTitle('Envie o seu invite text');
        const paragraphComponent = new TextInputBuilder()
            .setCustomId('tituloDesabafo')
            .setLabel('Qual o título do seu desabafo?')
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true);
        const modalComponents = new ActionRowBuilder()
            .addComponents(paragraphComponent);

        modalMenu.addComponents(modalComponents);

        await interaction.showModal(modalMenu);
        await interaction.reply({
            content: `Olá <@${interaction.user.id}>, sua solicitação foi enviada para a staff, aguarde até que alguém o contate na dm. \n(Altamente necessário que deixe sua dm aberta, do contrário será descartado.)`,
            ephemeral: true
        });
    },
};
