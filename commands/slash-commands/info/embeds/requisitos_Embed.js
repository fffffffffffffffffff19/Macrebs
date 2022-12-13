const { footerIcon, footerText } = require('../../../../global_Embeds/footer');

module.exports = {
    color: 0x5d718c,
    description: '***Olá, leia a lista de requisitos para nossa parceria, caso seu servidor seja adequado, crie um ticket e aguarde a staff.***',
    image: {
        url: 'https://i.imgur.com/i0uxMcL.png',
    },
    fields: [
        {
            name: 'Respeitar as TOS do discord.',
            value: 'Link para a [TOS](https://discord.com/terms).',
        },
        {
            name: 'Não deve ser tóxico.',
            value: 'Servidores que tiverem interações duvidosas ou explícitamente tóxico serão banidos da nossa parceria.',
        },
        {
            name: 'Completamente SFW.',
            value: 'Não deve conter nenhum conteúdo +18 de qualquer tipo.',
        },
        {
            name: 'Haver um representante',
            value: 'É necessário um representante para ficar no servidor.',
        },
        {
            name: 'Deve ter um ping de parcerias.',
            value: 'Para haver engajamentos, exigimos um ping de parcerias ou everyone/here.',
        },
        {
            name: 'Não ser um servidor morto',
            value: 'Precisa ter algum tipo de interação recorrente por parte da comunidade.',
        },
        {
            name: 'Total de membros (Bots não são contabilizados)',
            value: 'O total de membros deve ser no mínimo 25% do total do Macrebs.\n(Ex: 25 % 1500 = 375 Membros)',
        },
    ],
    footer: {
        text: `${footerText}`,
        icon_url: `${footerIcon}`,
    },
}