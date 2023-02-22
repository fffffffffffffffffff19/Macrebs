const { footerIcon, footerText } = require('../../../embeds/footer');

module.exports = {
    replyMister: () => ({
        color: 0xfdfa8c,
        title: '**・Macrebs Hide-System ˎˊ-**',
        description: '> *Gostaria de esconder as categorias do servidor?*\n> *Escolha as categorias abaixo.*',
        fields: [
            {
                name: '🌼・Importantes',
                value: '*Categoria de avisos e informação.*',
                inline: true,
            },
            {
                name: '🍄・Interação',
                value: '*Categoria principal de conversação.*',
                inline: true,
            },
            {
                name: '🌺・Comunidade',
                value: '*Categoria de interação diversa.*',
                inline: true,
            },
            {
                name: '🌻・Utilitários',
                value: '*Categoria de suporte e ajuda.*',
                inline: true,
            },
            {
                name: '🌹・Conversa',
                value: '*Categoria dos chats de voz.*',
                inline: true,
            },
            {
                name: '🍀・Mini-Game',
                value: '*Categoria principal dos games.*',
                inline: true,
            },
            {
                name: '⠀',
                value: '⠀',
                inline: true,
            },
            {
                name: '🌿・Parcerias',
                value: '*Categoria dos nossos parceiros.*',
                inline: true,
            },
            {
                name: '⠀',
                value: '⠀',
                inline: true,
            },
        ],
        image: {
            url: 'https://i.imgur.com/I1nMepa.jpeg',
        },
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),
    replyMain: () => ({
        color: 0xfdfa8c,
        title: '**・Macrebs Hide-System ˎˊ-**',
        description: '> *Gostaria de esconder as categorias do servidor?*\n> *Escolha as categorias abaixo.*',
        fields: [
            {
                name: '🌺・Comunidade',
                value: '*Categoria de interação diversa.*',
                inline: true,
            },
            {
                name: '🌹・Conversa',
                value: '*Categoria dos chats de voz.*',
                inline: true,
            },
            {
                name: '🍀・Mini-Game',
                value: '*Categoria principal dos games.*',
                inline: true,
            },
            {
                name: '⠀',
                value: '⠀',
                inline: true,
            },
            {
                name: '🌿・Parcerias',
                value: '*Categoria dos nossos parceiros.*',
                inline: true,
            },
            {
                name: '⠀',
                value: '⠀',
                inline: true,
            },
        ],
        image: {
            url: 'https://i.imgur.com/I1nMepa.jpeg',
        },
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),
};
