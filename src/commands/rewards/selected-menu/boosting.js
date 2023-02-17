const { boostingEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'boostingMenu',
    async execute(interaction) {
        await interaction.reply({ embeds: [boostingEmbed()], ephemeral: true });
    },
};
