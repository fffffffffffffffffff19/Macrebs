const { mercadinhoEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'mercadinhoMenu',
    async execute(interaction) {
        await interaction.reply({ embeds: [mercadinhoEmbed()], ephemeral: true });
    },
};
