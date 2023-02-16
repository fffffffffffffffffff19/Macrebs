const { invitesEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'invites_Menu',
    async execute(interaction) {
        await interaction.reply({ embeds: [invitesEmbed()], ephemeral: true });
    },
};
