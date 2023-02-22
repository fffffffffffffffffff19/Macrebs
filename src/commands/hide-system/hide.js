const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const { replyMister } = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hidemister')
        .setDescription('Comando para esconder categorias do servidor.'),
    async execute(interaction) {
        const channelMister = await interaction.guild.channels.cache.get('1041124832835813477'); // spamChannel: 960641940125261874 / misterChannel: 1041124832835813477
        const misterMenu = new ActionRowBuilder().addComponents(new StringSelectMenuBuilder().setCustomId('mister').setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
            .addOptions(
                {
                    label: '🌼・Importantes',
                    value: 'importantes_Menu',
                },
                {
                    label: '🍄・Interação',
                    value: 'interacaoChat_Menu',
                },
                {
                    label: '🌺・Comunidade',
                    value: 'comunidade_Menu',
                },
                {
                    label: '🌻・Utilitários',
                    value: 'utilitarios_Menu',
                },
                {
                    label: '🌹・Conversa',
                    value: 'conversa_Menu',
                },
                {
                    label: '🍀・Mini-Games',
                    value: 'miniGame_Menu',
                },
                {
                    label: '🌿・Parcerias',
                    value: 'parceria_Menu',
                },
            ));

        await interaction.reply({ content: 'sent!', ephemeral: true });
        await channelMister.send({ embeds: [replyMister()], components: [misterMenu] });
    },
};
