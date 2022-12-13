module.exports = {
    ajudaEmbed: interaction => {
        return {
            color: 0xffffff,
            title: '・Ajuda - Ticket ˎˊ-',
            description: `Olá <@${interaction.user.id}>, pediremos que aguarde até a chegada de um responsável.`,
            image: {
                url: 'https://i.imgur.com/9q7kh99.jpeg'
            },
        }
    }
}