const { boostingEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'boosting_Menu',
    async execute(interaction) {
        await interaction.reply({ embeds: [boostingEmbed()], ephemeral: true });
    },
};
