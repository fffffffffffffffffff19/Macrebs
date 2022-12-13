const Embed = require('../embeds/divulgueAqui_Embed');

module.exports = {
    id: 'divulgacao_Menu',
    async execute(interaction) {
        await interaction.reply({ embeds: [Embed], ephemeral: true });
    }
}