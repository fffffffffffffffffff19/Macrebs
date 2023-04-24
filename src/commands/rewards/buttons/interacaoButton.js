const { interacaoEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'interacaoButton',
    async execute(interaction) {
        await interaction.reply({ embeds: [interacaoEmbed()], ephemeral: true });
    },
};
