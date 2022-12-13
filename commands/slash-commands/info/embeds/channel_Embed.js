module.exports = {
    channelEmbed: interaction => {
        return {
            color: 0xffffff,
            title: '・Pedir - Parceria ˎˊ-',
            description: `Olá <@${interaction.user.id}>, pediremos que aguarde até a chegada de um responsável. Para voltar a ver o servidor, basta fechar o ticket.`,
            image: {
                url: 'https://i.imgur.com/9q7kh99.jpeg'
            },
        }
    }
}