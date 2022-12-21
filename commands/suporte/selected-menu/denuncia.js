const { ChannelType, ActionRowBuilder, ButtonBuilder, ComponentType, ButtonStyle } = require('discord.js');
const { denunciaEmbed } = require('../embeds/ticketReply_Embed');

module.exports = {
    id: 'denuncia_Menu',
    async execute(interaction) {
        const moderacaoRole = await interaction.guild.roles.cache.get('936600289539145751');
        const channel = await interaction.guild.channels.cache.get('960641940125261874');
        const ping = `<@&${moderacaoRole.id}>`
        const panelButtons = new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setCustomId('cancel_Ticket')
            .setLabel('Fechar Ticket')
            .setStyle(ButtonStyle.Danger)
        )

        await channel.threads.create({ name: '︰denuncia-open︰', type: ChannelType.PrivateThread, autoArchiveDuration: 60, }).then(async privateThread => {
            await interaction.reply({ content: `* *Um ticket foi criado para o seu atendimento, se direcione para o canal <#${privateThread.id}>* *`, ephemeral: true });
            await privateThread.members.add(interaction.user.id);
            await privateThread.send({ content: ping, embeds: [denunciaEmbed(interaction)], components: [panelButtons] }).then(async button => {
                const filter = async buttonClick => buttonClick.user.id === interaction.user.id || buttonClick.member.roles.cache.has(moderacaoRole.id) || interaction.user.id === '249955734958243840';
                const collector = await button.createMessageComponentCollector({ filter, componentType: ComponentType.Button, time: 1500000 }); //1500000 = 25minutos

                collector.on('collect', async buttonClick => await buttonClick.reply({ content: '* *O canal será deletado em 5 segundos.* * T-T' }).then(() => setTimeout(() => { privateThread.delete(); }, 6000)));
                collector.on('end', async (collected, reason) => { if (reason == 'time') { await privateThread.delete(); } });
            });
        });
    }
}