const Embed = require('../embeds/moderacaoGuia_Embed');

module.exports = {
    id: 'moderacao_Menu',
    async execute(interaction) {
        const staffRole = await interaction.member.roles.cache.has('936600289539145751');

        if (staffRole) await interaction.reply({ embeds: [Embed], ephemeral: true });
        else await interaction.reply({ content: '*Eii!!* Você não tem permissão para ler este guia, selecione o indicado ao seu cargo. >:(', ephemeral: true });
    },
};
