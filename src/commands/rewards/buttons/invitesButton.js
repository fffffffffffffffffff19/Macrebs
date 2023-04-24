const { invitesEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'invitesButton',
    async execute(interaction) {
        await interaction.reply({ embeds: [invitesEmbed()], ephemeral: true });
    },
};
