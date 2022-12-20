const { divulgeAqui_Embed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'divulgacao_Menu',
    async execute(interaction) {
        await interaction.reply({ embeds: [divulgeAqui_Embed()], ephemeral: true });
    }
}