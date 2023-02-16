const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const replyEmbed = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('economia')
        .setDescription('Mensagens do suporte'),
    async execute(interaction) {
        const channel = await interaction.guild.channels.cache.get('1019082997741400147');
        const menu = new ActionRowBuilder()
            .addComponents(new StringSelectMenuBuilder()
                .setCustomId('economia')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .addOptions(
                    {
                        label: '🧇・Mercadinho',
                        description: 'Nossa loja oficial do servidor.',
                        value: 'mercadinho_Menu',
                    },
                    {
                        label: '🥘・Divulgação',
                        description: 'Gostaria de divulgar um servidor??',
                        value: 'divulgacao_Menu',
                    },
                ));

        await channel.send({ embeds: [replyEmbed], components: [menu] });
        await interaction.reply({ content: 'sent!!', ephemeral: true });
    },
};
