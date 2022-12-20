const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');
const replyEmbed = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rewards')
        .setDescription('Mensagens do suporte'),
    async execute(interaction) {
        const channel = await interaction.guild.channels.cache.get('1019082474229334068');
        const menu = new ActionRowBuilder()
            .addComponents(new SelectMenuBuilder()
                .setCustomId('rewards')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .addOptions(
                    {
                        label: '🍞・Invites',
                        description: 'Convide amigos e receba prêmios.',
                        value: 'invites_Menu',
                    },
                    {
                        label: '🥞・Interação',
                        description: 'Se gosta de interagir, temos prêmios por isso.',
                        value: 'interacao_Menu',
                    },
                    {
                        label: '🧀・Boosting',
                        description: 'Caso deu boost, lista de seus benefícios.',
                        value: 'boosting_Menu',
                    }
                )
            );

        await channel.send({ embeds: [replyEmbed], components: [menu] });
        await interaction.reply({ content: 'sent!!', ephemeral: true });
    }
}