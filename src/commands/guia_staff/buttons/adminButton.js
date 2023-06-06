const Embed = require('../embeds/adminGuia_Embed');

module.exports = {
    id: 'adminButton',
    async execute(interaction) {
        const staffRole = await interaction.member.roles.cache.has('890266753962233916');

        if (!staffRole) return interaction.reply({ content: '*Eii!!* Você não tem permissão para ler este guia, selecione o indicado ao seu cargo. >:(', ephemeral: true });

        await interaction.reply({ embeds: [Embed], ephemeral: true });
    },
};
