const { boostingEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'boostingButton',
    async execute(interaction) {
        await interaction.reply({ embeds: [boostingEmbed()], ephemeral: true });
    },
};
