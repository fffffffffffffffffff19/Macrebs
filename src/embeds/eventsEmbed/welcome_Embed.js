const { footerIcon } = require('../footer');

module.exports = {
    WelcomeChat: (icon, memberID, guildSize) => ({
        color: 0xFFFFFF,
        thumbnail: { url: `${icon}` },
        title: '\n  <a:Star:890658457223565313>⠀ﾟ･*☆¸¸.•*¨*•εïз★·.·´. <a:peeposhy:889893118239989780> .`·.·★εïз•*¨*•.¸¸☆*･ﾟ   <a:Star:890658457223565313> \n  ',
        description: `⠀\nOpa Amiguinho(a) <@${memberID}>, seja bem vindo(a)\nVenha bater um papo com a nossa comunidade! <a:Cheemspat:890658472385998909>\n⠀`,
        fields: [{ name: '⠀⤷Monte o seu perfil', value: 'Siga ~> <#996550472850755704>\n⠀', inline: true }, { name: '⠀Leia nossas regras⤶', value: 'Siga ~> <#889552539715010611>\n⠀', inline: true }],
        footer: { text: `Agora temos ${guildSize} membros | Macrebs~~`, icon_url: `${footerIcon}` },
    }),
};
