module.exports = {
    id: 'importantes_Menu',
    async execute(interaction) {
        const hideRole = await interaction.guild.roles.cache.find((role) => role.id == '1041718772567920732');
        const separatorRole = await interaction.guild.roles.cache.find((role) => role.id == '1019779338792599622');
        const user = await interaction.member;

        if (user.roles.cache.some((role) => role.id == hideRole.id)) {
            await user.roles.remove(hideRole);
            await interaction.reply({ content: '*Categoria disponível novamente. ^-^*', ephemeral: true });
        } else {
            await user.roles.add(separatorRole);
            await user.roles.add(hideRole);
            await interaction.reply({ content: '*Categoria escondida com sucesso. ^-^*\n**__Para vê-la novamente, basta selecionar o mesmo menu__.**', ephemeral: true });
        }
    },
};
