const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { sejaStaff_Embed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'sejaStaff_Menu',
    async execute(interaction) {
        const Button = new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setLabel('Fazer Formulário')
            .setStyle(ButtonStyle.Link)
            .setURL('https://docs.google.com/forms/d/e/1FAIpQLScimJl2rug8S1ZkBYi7UOUIXYv9F3ndCzlcJ9hcV2DKbj6Xwg/viewform')
        );
        await interaction.reply({ embeds: [sejaStaff_Embed()], components: [Button], ephemeral: true });
    }
}
