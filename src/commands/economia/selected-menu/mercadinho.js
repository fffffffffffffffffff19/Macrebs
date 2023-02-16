const { mercadinhoEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'mercadinho_Menu',
    async execute(interaction) {
        await interaction.reply({ embeds: [mercadinhoEmbed()], ephemeral: true });
    },
};
