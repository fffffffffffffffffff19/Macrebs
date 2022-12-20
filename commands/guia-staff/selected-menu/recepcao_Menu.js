const Embed = require('../embeds/recepcaoGuia_Embed');

module.exports = {
    id: 'recepcao_Menu',
    async execute(interaction) {
        const staffRole = await interaction.member.roles.cache.has('936599914014720041');

        if(staffRole) await interaction.reply({ embeds: [Embed], ephemeral: true });
        else await interaction.reply({ content: '* *Você não tem permissão para ler os guias de outros cargos. T-T* *', ephemeral: true });
    }
}