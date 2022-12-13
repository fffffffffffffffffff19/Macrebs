const Embed = require('../embeds/boosting_Embed');

module.exports = {
    id: 'boosting_Menu',
    async execute(interaction) {
        await interaction.reply({ embeds: [Embed], ephemeral: true });
    }
}