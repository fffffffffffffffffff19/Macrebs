const { mercadinho_Embed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'mercadinho_Menu',
    async execute(interaction) {
        await interaction.reply({ embeds: [mercadinho_Embed()], ephemeral: true });
    }
}