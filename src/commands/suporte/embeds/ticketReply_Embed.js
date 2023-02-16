module.exports = {
    duvidaEmbed: (interaction) => ({
        color: 0xffffff,
        title: '・Dúvida - Ticket ˎˊ-',
        description: `> Olá <@${interaction.user.id}>!!\n> Pediremos que aguarde até a chegada de um responsável.`,
        image: {
            url: 'https://i.imgur.com/j8nwEFX.jpeg',
        },
    }),

    denunciaEmbed: (interaction) => ({
        color: 0xffffff,
        title: '・Denuncia - Ticket ˎˊ-',
        description: `> Olá <@${interaction.user.id}>!!\n> Pediremos que aguarde até a chegada de um responsável.`,
        image: {
            url: 'https://i.imgur.com/TRWMfMT.jpeg',
        },
    }),

    ajudaEmbed: (interaction) => ({
        color: 0xffffff,
        title: '・Ajuda - Ticket ˎˊ-',
        description: `> Olá <@${interaction.user.id}>!!\n> Pediremos que aguarde até a chegada de um responsável.`,
        image: {
            url: 'https://i.imgur.com/LxpfLNR.jpg',
        },
    }),
};
