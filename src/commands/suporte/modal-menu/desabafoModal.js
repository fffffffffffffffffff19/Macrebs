const desabafoEmbed = require('../embeds/desabafoEmbed');
const { epoch } = require('../../../tools/time');

module.exports = {
    id: 'desabafoModal',
    async execute(interaction) {
        const list = [
            'https://i.imgur.com/EAMVxVx.jpeg',
            'https://i.imgur.com/KWQ9rEF.jpeg',
            'https://i.imgur.com/666KaYG.jpeg',
            'https://i.imgur.com/GYkZPNO.jpeg',
            'https://i.imgur.com/CTAgZJL.jpeg',
            'https://i.imgur.com/WjaCk0L.jpeg',
            'https://i.imgur.com/NyjMUpG.jpeg',
            'https://i.imgur.com/Y57LnTx.jpeg',
        ];
        const random = Math.floor(Math.random() * 8);
        const embedImage = list[random];
        const interactionUser = interaction.user;
        const channel = await interaction.guild.channels.cache.get('1051633625159962674'); // spamChannel: 960641940125261874 / mainChannel: 1051633625159962674
        const tituloDesabafo = await interaction.fields.getTextInputValue('tituloDesabafo');
        const desabafo = await interaction.fields.getTextInputValue('textoDesabafo');

        await interaction.reply({ content: 'Texto enviado com sucesso. Obgda por desabafar :3', ephemeral: true });

        await channel.send({ content: `Título: "**${tituloDesabafo}**"\nData de envio: ${epoch()}\n*Quer enviar o seu anonimamente? Basta checar em <#1019077752390942792>.*`, embeds: [desabafoEmbed(desabafo, embedImage)] })
            .then((msg) => msg.startThread({
                name: '꒰ᐢ • ˕ • ᐢ꒱ Mande seu apoio aqui. ˎˊ˗',
                autoArchiveDuration: 60,
            }).catch(async () => {
                await msg.delete();
                await interactionUser.send({ content: 'Houve um erro ao enviar o seu texto, comunique um staff sobre o acontecimento. "Erro ao enviar a mensagem."', ephemeral: true })
                    .catch(async () => {
                        const errorLog = await interaction.guild.channels.cache.get('1100077156559769701');
                        await errorLog.send({ content: `Erro ao enviar mensagem na dm.\nUsuário: <@${interaction.user.id}>\nComando usado: ${interaction.customId}` });
                    });
            }));
    },
};
