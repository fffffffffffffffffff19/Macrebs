const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const Embed = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('guia-staff')
        .setDescription('Guias da staff'),
    async execute(interaction) {
        const channel = await interaction.guild.channels.cache.get('1021640639974211645');
        const Menu = new ActionRowBuilder()
            .addComponents(new StringSelectMenuBuilder()
                .setCustomId('guiaStaffMenu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .addOptions(
                    {
                        label: '🥙・Moderação',
                        value: 'moderacaoMenu',
                    },
                    {
                        label: '🌮・Parcerias',
                        value: 'parceriasMenu',
                    },
                    {
                        label: '🥪・Recepção',
                        value: 'recepcaoMenu',
                    },
                ));

        await channel.send({ embeds: [Embed], components: [Menu] });
        await interaction.reply({ content: 'sent!!!', ephemeral: true });
    },
};
