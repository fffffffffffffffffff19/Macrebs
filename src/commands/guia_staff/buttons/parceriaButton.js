const Embed = require('../embeds/parceriasGuia_Embed');

module.exports = {
    id: 'parceriaButton',
    async execute(interaction) {
        const staffRole = await interaction.member.roles.cache.has('936599687148994581');

        if (!staffRole) return interaction.reply({ content: '*Eii!!* Você não tem permissão para ler este guia, selecione o indicado ao seu cargo. >:(', ephemeral: true });

        await interaction.reply({ embeds: [Embed], ephemeral: true });
    },
};
