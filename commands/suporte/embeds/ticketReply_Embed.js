module.exports = {
    /* resgatarEmbed: interaction => {
        return {
            color: 0xffffff,
            title: '・Resgatar - Ticket ˎˊ-',
            description: `Olá <@${interaction.user.id}>, pediremos que aguarde até a chegada de um responsável.`,
            image: {
                url: 'https://i.imgur.com/9q7kh99.jpeg'
            },
        }
    }, */

    duvidaEmbed: interaction => {
        return {
            color: 0xffffff,
            title: '・Dúvida - Ticket ˎˊ-',
            description: `> Olá <@${interaction.user.id}>!!\n> Pediremos que aguarde até a chegada de um responsável.`,
            image: {
                url: 'https://i.imgur.com/j8nwEFX.jpeg'
            },
        }
    },

    denunciaEmbed: interaction => {
        return {
            color: 0xffffff,
            title: '・Denuncia - Ticket ˎˊ-',
            description: `> Olá <@${interaction.user.id}>!!\n> Pediremos que aguarde até a chegada de um responsável.`,
            image: {
                url: 'https://i.imgur.com/TRWMfMT.jpeg'
            },
        }
    },

    ajudaEmbed: interaction => {
        return {
            color: 0xffffff,
            title: '・Ajuda - Ticket ˎˊ-',
            description: `> Olá <@${interaction.user.id}>!!\n> Pediremos que aguarde até a chegada de um responsável.`,
            image: {
                url: 'https://i.imgur.com/LxpfLNR.jpg'
            },
        }
    },
}