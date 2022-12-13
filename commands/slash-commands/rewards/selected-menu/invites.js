const Embed = require('../embeds/invites_Embed');

module.exports = {
    id: 'invites_Menu',
    async execute(interaction) {
        await interaction.reply({ embeds: [Embed], ephemeral: true });
    }
}