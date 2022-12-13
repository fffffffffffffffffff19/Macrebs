const Embed = require('../embeds/parceriasGuia_Embed');

module.exports = {
    id: 'parcerias_Menu',
    async execute(interaction) {
        const staffRole = await interaction.member.roles.cache.has('936599687148994581');

        if(staffRole) await interaction.reply({ embeds: [Embed], ephemeral: true });
        else await interaction.reply({ content: '* *Você não tem permissão para ler os guias de outros cargos. T-T* *', ephemeral: true });
    }
}