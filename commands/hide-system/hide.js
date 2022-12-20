const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');
const { replyMister, replyMain } = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hide')
        .setDescription('Comando para esconder categorias do servidor.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('hide-main')
                .setDescription('Mister lanches'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('hide-mister')
                .setDescription('Mister lanches')),
    async execute(interaction) {
        const comparator = await interaction.options.getSubcommand();
        const channelMain = await interaction.guild.channels.cache.get('1041777226724679690'); // spamChannel: 960641940125261874 / mainChannel: 1041777226724679690
        const channelMister = await interaction.guild.channels.cache.get('1041124832835813477'); // spamChannel: 960641940125261874 / misterChannel: 1041124832835813477
        const misterMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder().setCustomId('mister').setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
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
            )
        );

        const mainMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder().setCustomId('mister').setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
            .addOptions(
                {
                    label: '🌺・Comunidade',
                    value: 'comunidade_Menu',
                },
                {
                    label: '🌹・Conversa',
                    value: 'conversa_Menu',
                },
                {
                    label: '🍀・Mini-Games',
                    value: 'game_Menu',
                },
                {
                    label: '🌿・Parcerias',
                    value: 'parceria_Menu',
                },
            )
        );

        if (comparator == 'hide-main') {
            await interaction.reply({ content: 'sent!', ephemeral: true });
            await channelMain.send({ embeds: [replyMain()], components: [mainMenu] });
        } else {
            await interaction.reply({ content: 'sent!', ephemeral: true });
            await channelMister.send({ embeds: [replyMister()], components: [misterMenu] });
        }
    }
}