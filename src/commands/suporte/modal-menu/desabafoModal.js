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
        const channel = await interaction.guild.channels.cache.get('960641940125261874');
        const tituloDesabafo = await interaction.fields.getTextInputValue('tituloDesabafo');
        const desabafo = await interaction.fields.getTextInputValue('textoDesabafo');

        await channel.send({ content: `Título: "**${tituloDesabafo}**"\nData de envio: ${epoch()}\n*Quer enviar o seu anonimamente? Basta checar em <#1019077752390942792>*`, embeds: [desabafoEmbed(desabafo, embedImage)] })
            .then((msg) => msg.startThread({
                name: '꒰ᐢ • ˕ • ᐢ꒱ Mande seu apoio aqui. ˎˊ˗',
                autoArchiveDuration: 60,
            }).catch(() => msg.delete()));
        await interaction.reply({ content: 'Texto enviado com sucesso. Obgda por desabafar :3', ephemeral: true });
    },
};
