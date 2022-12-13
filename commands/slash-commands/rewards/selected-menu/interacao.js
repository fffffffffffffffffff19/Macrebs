const Embed = require('../embeds/interacao_Embed');

module.exports = {
    id: 'interacao_Menu',
    async execute(interaction) {
        await interaction.reply({ embeds: [Embed], ephemeral: true });
    }
}