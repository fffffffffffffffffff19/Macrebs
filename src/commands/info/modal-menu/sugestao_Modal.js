const { sugestaoSendingEmbed } = require('../embeds/msgReply_Embed');

module.exports = {
    id: 'sugestao_Modal',
    async execute(interaction) {
        const user = await interaction.user.id;
        const time = new Date().toDateString();
        const channel = await interaction.guild.channels.cache.get('1014569119955292251');
        const title = await interaction.fields.getTextInputValue('title-sugestao');
        const sugestao = await interaction.fields.getTextInputValue('sugestao');
        const staffRole = '<@&996510392689905665>';
        const webhooks = await channel.fetchWebhooks();
        const webhook = await webhooks.first();

        await channel.send({ content: `Sugestão enviada por: <@${user}>\nData de envio: \`${time}\``, embeds: [sugestaoSendingEmbed(title, sugestao)] })
            .then((msg) => msg.startThread({
                name: `"${title}"`,
                autoArchiveDuration: 60,
            }).then((thread) => webhook.send({
                content: staffRole,
                threadId: thread.id,
            })));

        await interaction.reply({ content: 'Sugestão enviada!!', ephemeral: true });
    },
};
