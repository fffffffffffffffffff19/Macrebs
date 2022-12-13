const { ChannelType, PermissionsBitField, ActionRowBuilder, ButtonBuilder, ComponentType, ButtonStyle } = require('discord.js');
const { channelEmbed } = require('../embeds/channel_Embed');

module.exports = {
    id: 'pedir-parceria_Button',
    async execute(interaction) {
        const parceriaRole = await interaction.guild.roles.cache.get('936599687148994581');
        const hideRole = await interaction.guild.roles.cache.get('1019778934663028788');
        const memberRole = await interaction.guild.roles.cache.get('889561683310289017');
        const panelButtons = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('cancel_Ticket')
                    .setLabel('Fechar Ticket')
                    .setStyle(ButtonStyle.Danger))

        await interaction.guild.channels.create({
            name: `︰parceria-open︰`,
            type: ChannelType.GuildText,
            parent: '1019696510054715442'
        }).then(async channel => {
            await channel.permissionOverwrites.set([
                {
                    id: interaction.guild.id,
                    deny: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: parceriaRole.id,
                    allow: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionsBitField.Flags.ViewChannel],
                },
            ]);
            try {
                await channel.send({ content: `<@&${parceriaRole.id}>`, embeds: [channelEmbed(interaction)], components: [panelButtons] }).then(async button => {
                    const filter = async buttonClick => buttonClick.user.id === interaction.user.id || buttonClick.member.roles.cache.has(parceriaRole.id) || interaction.user.id === '249955734958243840';
                    const collector = await button.createMessageComponentCollector({ filter, componentType: ComponentType.Button, time: 600000 }); //600000 = 10minutos

                    await interaction.member.roles.add(hideRole);
                    await interaction.member.roles.remove(memberRole);

                    collector.on('collect', async buttonClick => {
                        await buttonClick.reply({ content: '* *O canal será deletado em 5 segundos.* * T-T' });
                        setTimeout(() => { channel.delete(); }, 6000);
                        await collector.stop('cancel');
                    });

                    collector.on('end', async (collected, reason) => {
                        if (reason === 'time') {
                            await interaction.member.roles.add(memberRole);
                            await interaction.member.roles.remove(hideRole);
                            await channel.delete();
                        }
                        if (reason === 'cancel') {
                            await interaction.member.roles.add(memberRole);
                            await interaction.member.roles.remove(hideRole);
                        }
                    });
                });
            } catch (e) {
                await channel.delete();
                await interaction.reply({ content: 'Houve algum erro, contate a administração.', ephemeral: true });
                console.log(e);
            }
        });
    }
}