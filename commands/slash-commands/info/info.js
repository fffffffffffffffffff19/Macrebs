const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');
const Embed = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Algumas informações sobre o servidor.'),
    async execute(interaction) {
        const channel = await interaction.guild.channels.cache.get('960641940125261874');
        const menu = new ActionRowBuilder()
            .addComponents(new SelectMenuBuilder()
                .setCustomId('info')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .addOptions(
                    {
                        label: '🌼 New Garden',
                        description: 'Gostaria de se tornar staff?',
                        value: 'newGarden_Menu',
                    },
                    {
                        label: '☕ Seja Staff',
                        description: 'Gostaria de se tornar staff?',
                        value: 'sejaStaff_Menu',
                    },
                    {
                        label: '🍙 Pedir Parceria',
                        description: 'Aperte aqui caso queira uma parceria.',
                        value: 'parceria_Menu',
                    },
                )
            );

        await channel.send({ embeds: [Embed], components: [menu] });
        await interaction.reply({ content: 'msg sent!', ephemeral: true });
    }
}