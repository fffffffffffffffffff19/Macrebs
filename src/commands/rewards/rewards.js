const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const replyEmbed = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rewards')
        .setDescription('Mensagens do suporte'),
    async execute(interaction) {
        const channel = await interaction.guild.channels.cache.get('1019082474229334068');
        const menu = new ActionRowBuilder()
            .addComponents(new StringSelectMenuBuilder()
                .setCustomId('rewards')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .addOptions(
                    {
                        label: '🍞・Invites',
                        description: 'Convide amigos e receba prêmios.',
                        value: 'invitesMenu',
                    },
                    {
                        label: '🥞・Interação',
                        description: 'Se gosta de interagir, temos prêmios por isso.',
                        value: 'interacaoMenu',
                    },
                    {
                        label: '🧀・Boosting',
                        description: 'Caso deu boost, lista de seus benefícios.',
                        value: 'boostingMenu',
                    },
                ));

        await channel.send({ embeds: [replyEmbed], components: [menu] });
        await interaction.reply({ content: 'sent!!', ephemeral: true });
    },
};
