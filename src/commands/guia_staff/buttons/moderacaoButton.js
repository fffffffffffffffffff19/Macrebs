const Embed = require('../embeds/moderacaoGuia_Embed');

module.exports = {
    id: 'moderacaoButton',
    async execute(interaction) {
        const staffRole = await interaction.member.roles.cache.has('936600289539145751');

        if (!staffRole) return interaction.reply({ content: '*Eii!!* Você não tem permissão para ler este guia, selecione o indicado ao seu cargo. >:(', ephemeral: true });

        await interaction.reply({ embeds: [Embed], ephemeral: true });
    },
};
