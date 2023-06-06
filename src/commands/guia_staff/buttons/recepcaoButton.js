const Embed = require('../embeds/recepcaoGuia_Embed');

module.exports = {
    id: 'recepcaoButton',
    async execute(interaction) {
        const staffRole = await interaction.member.roles.cache.has('936599914014720041');

        if (!staffRole) return interaction.reply({ content: '*Eii!!* Você não tem permissão para ler este guia, selecione o indicado ao seu cargo. >:(', ephemeral: true });

        await interaction.reply({ embeds: [Embed], ephemeral: true });
    },
};
