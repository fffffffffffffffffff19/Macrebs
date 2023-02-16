const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { newGardenEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'newGarden_Menu',
    async execute(interaction) {
        const Button = new ActionRowBuilder()
            .addComponents(new ButtonBuilder()
                .setLabel('Servidor Oficial!')
                .setStyle(ButtonStyle.Link)
                .setURL('https://discord.com/invite/eCrwXCaa9B'))
            .addComponents(new ButtonBuilder()
                .setLabel('Formulário')
                .setStyle(ButtonStyle.Link)
                .setURL('https://docs.google.com/forms/d/e/1FAIpQLSfaXNIQyG63uUX4of_OltNuhyLVLP0Z34fD67bxCHKd9dfsMA/viewform'));
        await interaction.reply({ embeds: [newGardenEmbed()], components: [Button], ephemeral: true });
    },
};
