const { footerIcon, footerText } = require('../../../embeds/footer');

module.exports = {
    color: 0xffffff,
    title: '**: Um breve tutorial para ser um bom admin :**',
    description: '**Irei postar brevemente aqui, porém, o básico do básico, para dar ban, iremos usar o Wick, basta usar `/ban` dele, ou `;;ban`.\nObs:Caso vc tente banir pelo celular, pode haver um bug do discord n mostrar o botão do ban, então use os comandos do bot para tal, de resto é o de sempre, fiquem atentos a requisição de usuários por conta de tal ou tais membros, se necessário, use `-clear` para limpar o chat se o discord não fizer isso automaticamente.**',
    image: {
        url: 'https://i.imgur.com/SIOi8D0.jpeg',
    },
    footer: {
        text: `${footerText}`,
        icon_url: `${footerIcon}`,
    },
};
