const Embed = require('../embeds/ajudanteGuia_Embed');

module.exports = {
    id: 'ajudante_Menu',
    async execute(interaction) {
        const staffRole = await interaction.member.roles.cache.has('1019624528575463424');

        if(staffRole) await interaction.reply({ embeds: [Embed], ephemeral: true });
        else await interaction.reply({ content: '* *Você não tem permissão para ler os guias de outros cargos. T-T* *', ephemeral: true });
    }
}