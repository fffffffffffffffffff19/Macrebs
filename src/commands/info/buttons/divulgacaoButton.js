const { divulgeAquiEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'divulgacaoButton',
    async execute(interaction) {
        await interaction.reply({ embeds: [divulgeAquiEmbed()], ephemeral: true });
    },
};
