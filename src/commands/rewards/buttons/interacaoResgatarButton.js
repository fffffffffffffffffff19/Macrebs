const { ChannelType, ActionRowBuilder, ButtonBuilder, ComponentType, ButtonStyle } = require('discord.js');
const resgatarEmbed = require('../embeds/ticketReply_Embed');

module.exports = {
    id: 'interacaoResgatarButton',
    async execute(interaction) {
        const ownersRole = await interaction.guild.roles.cache.get('889556836888477736');
        const rewardChannel = await interaction.guild.channels.cache.get('1019082474229334068'); // mainChannel: 1019082474229334068 / setupChannel: 960641940125261874
        const ping = `<@&${ownersRole.id}>`;
        const panelButtons = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('cancel_Ticket')
                    .setLabel('Fechar Ticket')
                    .setStyle(ButtonStyle.Danger)
            );

        await rewardChannel.threads.create({ name: '︰resgatar-open︰', type: ChannelType.PrivateThread, autoArchiveDuration: 60 }).then(async (privateThread) => {
            await interaction.reply({ content: `* *Um ticket foi criado para o seu atendimento, se direcione para o canal <#${privateThread.id}>* *`, ephemeral: true });
            await privateThread.members.add(interaction.user.id);
            await privateThread.send({ content: ping, embeds: [resgatarEmbed(interaction)], components: [panelButtons] }).then(async (button) => {
                const filter = async (buttonClick) => buttonClick.user.id === interaction.user.id || buttonClick.member.roles.cache.has(ownersRole.id) || interaction.user.id === '249955734958243840';
                const collector = await button.createMessageComponentCollector({ filter, componentType: ComponentType.Button, time: 1500000 }); // 1500000 = 25minutos
                const onButtonClick = () => collector.stop('buttonClick');

                collector.on('collect', (buttonClick) => {
                    buttonClick.reply({ content: '* *O canal será deletado em 5 segundos.* * T-T' }).then(() => setTimeout(() => {
                        privateThread.delete();
                        onButtonClick();
                    }, 6000));
                });

                collector.on('end', (collected, reason) => { if (reason == 'time') privateThread.delete(); });
            });
        });
    },
};
