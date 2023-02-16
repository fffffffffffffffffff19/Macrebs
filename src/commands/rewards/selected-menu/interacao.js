const { interacaoEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'interacao_Menu',
    async execute(interaction) {
        await interaction.reply({ embeds: [interacaoEmbed()], ephemeral: true });
    },
};
