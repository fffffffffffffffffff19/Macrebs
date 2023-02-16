const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const Embed = require('./embeds/reply_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Algumas informações sobre o servidor.'),
    async execute(interaction) {
        const channel = await interaction.guild.channels.cache.get('1013814682185895957'); // spamChannel: 960641940125261874 / infoChannel: 1013814682185895957
        const menu = new ActionRowBuilder()
            .addComponents(new StringSelectMenuBuilder()
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
                        label: '💌 Enviar sugestão',
                        description: 'Envie sua sugestão aqui.',
                        value: 'sugestao_Menu',
                    },
                ));

        await channel.send({ embeds: [Embed], components: [menu] });
        await interaction.reply({ content: 'msg sent!', ephemeral: true });
    },
};
