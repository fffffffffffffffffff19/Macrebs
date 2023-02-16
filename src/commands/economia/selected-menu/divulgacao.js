const { divulgeAquiEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'divulgacao_Menu',
    async execute(interaction) {
        await interaction.reply({ embeds: [divulgeAquiEmbed()], ephemeral: true });
    },
};
