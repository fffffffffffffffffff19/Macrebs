const { footerIcon, footerText } = require('../../../embeds/footer');

module.exports = {
    color: 0xffffff,
    title: '**: Um breve tutorial para ser um bom ajudante :**',
    description: '**• O que exatamente um ajudante faz ? •**\n⠀*O objetivo é informar os membros e auxilia-los com as dúvidas.*\n⠀ **└>** *Seja indicando os canais ou atendendo os tickets.*\n\n**• Tenha em mente que.. •**\n⠀*Sempre será pingado a abertura de um ticket;*\n⠀ **└>** *Deixe as notificações do servidor ativadas.*\n\n⠀*Caso um membro tenha dúvidas, é seu dever atende-lo;*\n⠀ **└>** *Indique o canal <#1013814682185895957> para a pessoa.*\n⠀⠀ **└>** *Caso a dúvida não se encontre lá, fale com um superior.*\n\n**• Atendendo um ticket •**\n⠀*Após um membro criar um ticket, você será notificado no canal;*\n⠀*Verifique se ele já foi atendido por algum outro ajudante;*\n⠀*Se não, pergunte qual é o problema e atenda a pessoa da melhor forma;*\n⠀ **└>** *Indique o canal <#1013814682185895957> para a pessoa.*\n⠀⠀ **└>** *Caso a dúvida não se encontre lá, fale com um superior.*',
    image: {
        url: 'https://i.imgur.com/SIOi8D0.jpeg',
    },
    footer: {
        text: `${footerText}`,
        icon_url: `${footerIcon}`,
    },
};
