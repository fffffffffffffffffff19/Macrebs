const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');
const replyEmbed = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suporte')
        .setDescription('Mensagens do suporte'),
    async execute(interaction) {
        const channel = await interaction.guild.channels.cache.get('1019077752390942792'); // spamChannel: 960641940125261874 / mainChannel: 1019077752390942792
        const menu = new ActionRowBuilder()
            .addComponents(new SelectMenuBuilder()
                .setCustomId('suporte')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .addOptions(
                    {
                        label: '🌌・Denuncia',
                        description: 'Canal para criar denuncias.',
                        value: 'denuncia_Menu',
                    },
                    {
                        label: '💠・Ajuda',
                        description: 'Precisa de ajuda com alguma coisa ?',
                        value: 'ajuda_Menu',
                    },
                    {
                        label: '🧊・Dúvida',
                        description: 'Tire dúvidas de assuntos do servidor.',
                        value: 'duvida_Menu',
                    },
                )
            );

        await channel.send({ embeds: [replyEmbed], components: [menu] });
        await interaction.reply({ content: 'sent!!', ephemeral: true });
    }
}