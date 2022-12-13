const { footerIcon } = require('../footer');

module.exports = {
    WelcomeChat: (icon, memberID, guildSize ) => {
        return {
            color: 0xFFFFFF,
            thumbnail: { url: `${icon}` },
            title: '\n  <a:Star:890658457223565313>⠀ﾟ･*☆¸¸.•*¨*•εïз★·.·´. <a:peeposhy:889893118239989780> .`·.·★εïз•*¨*•.¸¸☆*･ﾟ   <a:Star:890658457223565313> \n  ',
            description: `⠀\nOpa Amiguinho(a) <@${memberID}>, seja bem vindo(a)\nVenha bater um papo com a nossa comunidade! <a:Cheemspat:890658472385998909>\n⠀`,
            fields: [{ name: '⠀⤷Monte o seu perfil', value: 'Siga ~> <#996550472850755704>\n⠀', inline: true }, { name: '⠀Leia nossas regras⤶', value: 'Siga ~> <#889552539715010611>\n⠀', inline: true }],
            footer: { text: `Agora temos ${guildSize} membros | Macrebs~~`, icon_url: `${footerIcon}` },
        }
    },

    WelcomeDM: () => {
        return {
            color: 0x67d2e1,
            image: { url: 'https://imgur.com/u5F6Z9R.png' },
            footer: { text: 'Venha fazer parte! 🌼', iconURL: 'https://i.imgur.com/MD2Pt6r.png' },
            description: `⠀Oie! Somos a New Garden, um novo jardim florescendo no Discord, estamos aqui para formar uma aliança, justa, comprometida e contra qualquer tipo de toxidade.\n⠀[Para mais informações](https://discord.gg/eCrwXCaa9B)\n⠀♡︰Conheça nossas comunidades:`,
            fields: [
            { 
                name: 'Design Stores:', 
                value: `[Studio Sunflowers](https://discord.gg/4XPHjVS9CQ)\n[Chained Store](https://discord.gg/JBZQrzrFRU)\n[Sapphire Shop](https://discord.gg/CwUMWXqeFX)\n[Ukiyo!](https://discord.gg/6nB3chHckk)`, 
                inline: true 
            }, 
            { 
                name: 'Communities:', 
                value: `[艾 Macrebs](https://discord.gg/CVNhMSkkEM)\n[Everything Black](https://discord.gg/RrHTuyF)\n[ファイアゴースト](https://discord.gg/sRzhkgFArw)\n[Eldaire](https://discord.gg/QYUnt2WvhR)\n[Migthy Temple](https://discord.gg/nsXPFE3edv)\n[Cosmos](https://discord.gg/ffZbKsxdUd)`, 
                inline: true 
            }],
        }
    }
}