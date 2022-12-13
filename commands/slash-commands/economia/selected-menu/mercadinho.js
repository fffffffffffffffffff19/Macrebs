const Embed = require('../embeds/mercadinho_Embed');

module.exports = {
    id: 'mercadinho_Menu',
    async execute(interaction) {
        await interaction.reply({ embeds: [Embed], ephemeral: true });
    }
}