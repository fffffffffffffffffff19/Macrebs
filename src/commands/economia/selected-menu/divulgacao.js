const { divulgeAquiEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'divulgacaoMenu',
    async execute(interaction) {
        await interaction.reply({ embeds: [divulgeAquiEmbed()], ephemeral: true });
    },
};
