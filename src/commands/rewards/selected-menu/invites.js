const { invitesEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'invitesMenu',
    async execute(interaction) {
        await interaction.reply({ embeds: [invitesEmbed()], ephemeral: true });
    },
};
