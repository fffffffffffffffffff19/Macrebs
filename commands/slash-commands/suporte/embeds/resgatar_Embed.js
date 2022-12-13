module.exports = {
    resgatarEmbed: interaction => {
        return {
            color: 0xffffff,
            title: '・Resgatar - Ticket ˎˊ-',
            description: `Olá <@${interaction.user.id}>, pediremos que aguarde até a chegada de um responsável.`,
            image: {
                url: 'https://i.imgur.com/9q7kh99.jpeg'
            },
        }
    }
}