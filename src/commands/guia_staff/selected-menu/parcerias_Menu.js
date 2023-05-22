const Embed = require('../embeds/parceriasGuia_Embed');

module.exports = {
    id: 'parceriasMenu',
    async execute(interaction) {
        const staffRole = await interaction.member.roles.cache.has('936599687148994581');

        if (staffRole) {
            await interaction.reply({ embeds: [Embed], ephemeral: true });
        } else await interaction.reply({ content: '*Eii!!* Você não tem permissão para ler este guia, selecione o indicado ao seu cargo. >:(', ephemeral: true });
    },
};
