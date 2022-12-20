const { footerIcon, footerText } = require('../../../global_Embeds/footer');

module.exports = {
    sugestaoReply_Embed: () => {
        return {
            color: 0xe4aec5,
            title: "(｡>◡<｡) Gostaria de sugerir algo ? Envie sua opinião aqui!!",
            description: "> Mande sua sugestão de como podemos melhorar o servidor!! \n> Basta enviar uma mensagem no botão abaixo, adoramos saber \n> a opinião de vocês para aprimorar a comunidade.\n\nㅤ**꒰ __Caso queira sugerir um bot, mande o link da página dele__ ꒱**",
            image: {
                url: "https://i.imgur.com/QHocZo2.png"
            },
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`
            },
        }
    },

    sugestaoSending_Embed: (title, sugestao) => {
        return {
            color: 0xffffff,
            title: `"${title}"`,
            description: `${sugestao}`,
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    },

    newGarden_Embed: () => {
        return {
            color: 0xb2c368,
            title: '⠀✧ﾟ₊New・Gardenಎ˚₊',
            description: '> *Conheça a New Garden, nossa aliança oficial!*\n> *Um projeto aconchegante, não tóxico, e com comunidades incríveis!*\n⠀',
            thumbnail: {
                url: 'https://i.imgur.com/UA4EvAC.png',
            },
            image: {
                url: 'https://i.imgur.com/B1whQLF.png',
            },
            fields: [
                {
                    name: "⠀Benefícios:",
                    value: "⠀Sistema de parcerias;\n⠀Sistema de patrocínios;",
                    inline: true,
                },
                {
                    name: "⠀",
                    value: "⠀Divulgação de eventos;\n⠀Chat de recrutamento;",
                    inline: true,
                },
            ],
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    },

    sejaStaff_Embed: () => {
        return {
            color: 0xf473b9,
            title: '๑‧˚₊꒷₊˚⌇ *__Sej__a S__taf__f* !﹕༉ ✧˚₊',
            description: "・꒰ *A staff é responsável por deixar a comunidade mais agradável.*\n・꒰ *São equipes que ajudam o servidor em suas áreas.*\n・꒰ *Se gostou do servidor e quer ajudar, vire staff!!*\n\n✧ﾟ₊˚・ **Cargos disponíveis para ingressar** ಎ˚₊\n\n╭・<@&936599687148994581>\n﹕**♡ Equipe de Parcerias ɞ**\n﹕**⌇** *Responsáveis por criar novas parcerias em outros servidores*\n﹕**⌇** *com isso, divulgar a nosso lá fora, é uma peça vital para o*\n﹕**⌇** *crescimento e desenvolvimento do nosso servidor.*\n﹕⬪ . ˚* ᚙ \\🌸 ˖࿓⌣⌣⌣⌣ˎˊ˗\n﹕\n﹕・<@&1019624528575463424>\n﹕**♡ Equipe de Ajudante ɞ**\n﹕**⌇** *Ajudam os membros a se informarem, tirando dúvidas*\n﹕**⌇** *e explicando a respeito de determinada coisa.*\n﹕**⌇** *São importantes para informar nossa comunidade.*\n﹕⬪ . ˚* ᚙ \\🌺 ˖࿓⌣⌣⌣⌣ˎˊ˗\n﹕\n﹕・<@&936599914014720041>\n﹕**♡ Equipe de Recepção ɞ**\n﹕**⌇** *Responsáveis por recepcionar novos membros, instruindo-os*\n﹕**⌇** *sobre os canais e como devem usar o servidor, além de*\n﹕**⌇** *informar dúvidas recorrentes que todo novato pode ter.*\n╰ ⬪ . ˚* ᚙ \\🎀 ˖࿓⌣⌣⌣⌣ˎˊ˗\n\n✧ﾟ₊˚・ **Vantagens em se tornar membro Staff** ಎ˚₊\n\n**・** *Recebem o vip <@&913256048528334888> __ilimitadamente__.*\n**・** *Vão receber cargo vip para todos os mini-games.* **(Se houver)**\n**・** *Cargo de <@&892422780946108456> para usar no <#911638292708085831>*\n\n*Se interessou e quer fazer parte da staff?\nBasta fazer nosso __formulário__.*\n\n・*Dúvidas? Procure a responsável, <@249955734958243840>.*",
            image: {
                url: 'https://imgur.com/CsmmX7i.png'
            },
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    }
}
