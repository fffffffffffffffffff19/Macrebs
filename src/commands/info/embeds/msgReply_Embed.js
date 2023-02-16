const { footerIcon, footerText } = require('../../../embeds/footer');

module.exports = {
    sugestaoReplyEmbed: () => ({
        color: 0xe4aec5,
        title: '(｡>◡<｡) Gostaria de sugerir algo ? Envie sua opinião aqui!!',
        description: '> Mande sua sugestão de como podemos melhorar o servidor!! \n> Basta enviar uma mensagem no botão abaixo, adoramos saber \n> a opinião de vocês para aprimorar a comunidade.\n\nㅤ**꒰ __Caso queira sugerir um bot, mande o link da página dele__ ꒱**',
        image: {
            url: 'https://i.imgur.com/QHocZo2.png',
        },
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),

    sugestaoSendingEmbed: (title, sugestao) => ({
        color: 0xffffff,
        title: `"${title}"`,
        description: `${sugestao}`,
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),

    newGardenEmbed: () => ({
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
                name: '⠀Benefícios:',
                value: '⠀Sistema de parcerias;\n⠀Sistema de patrocínios;',
                inline: true,
            },
            {
                name: '⠀',
                value: '⠀Divulgação de eventos;\n⠀Chat de recrutamento;',
                inline: true,
            },
        ],
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),

    sejaStaffEmbed: () => ({
        color: 0xf473b9,
        title: '๑‧˚₊꒷₊˚⌇ *__Sej__a S__taf__f* !﹕༉ ✧˚₊',
        description: '・꒰ A staff é responsável por deixar a comunidade mais agradável.\n・꒰ São equipes que ajudam o servidor em suas áreas.\n・꒰ Se gostou do servidor e quer ajudar, vire staff!!\n\n✧ﾟ₊˚・ **Cargos disponíveis para ingressar** ಎ˚₊\n\n╭・<@&936600289539145751>\n﹕**♡ Equipe de Moderação ɞ**\n﹕**⌇** Responsáveis por moderar os chats ou informar dúvidas.\n﹕**⌇** Em seus turnos, monitoram os chats de texto e voz, sempre\n﹕**⌇** mantendo o ambiente em ordem, baseando-se nas regras.\n﹕⬪ . ˚* ᚙ \\🌷 ˖࿓⌣⌣⌣⌣ˎˊ˗\n﹕\n﹕・<@&936599687148994581>\n﹕**♡ Equipe de Parcerias ɞ**\n﹕**⌇** Responsáveis por fechar parcerias com outras comunidades,\n﹕**⌇** é uma peça vital para o crescimento e desenvolvimento\n﹕**⌇** do nosso servidor.\n﹕⬪ . ˚* ᚙ \\🌸 ˖࿓⌣⌣⌣⌣ˎˊ˗\n﹕\n﹕・<@&936599914014720041>\n﹕**♡ Equipe de Recepção ɞ**\n﹕**⌇** Responsáveis por recepcionar os novos membros.\n﹕**⌇** Introduzindo-os ao servidor, seja indicando canais\n﹕**⌇** ou tirando dúvidas recorrentes que todo novato pode ter.\n╰ ⬪ . ˚* ᚙ \\🎀 ˖࿓⌣⌣⌣⌣ˎˊ˗\n\n✧ﾟ₊˚・ **Requisitos para ingressar** ಎ˚₊\n\n・Ter no mínimo o primeiro cargo do rank ( <@&891385231322538004> )\n・Ser um membro ativo nos chats\n・Ter no mínimo mais de 13 anos\n・Membros da moderação devem ter mais de 16 anos\n・Não deixar de exercer a sua função\n\n*Alguns desses requisitos ainda valerão mesmo ingressando na staff, descumprimento acarretará no desligamento do mesmo.*\n\n✧ﾟ₊˚・ **Vantagens em se tornar membro Staff** ಎ˚₊\n\n**・** Recebem o vip <@&943511293036486747> ilimitadamente\n**・** Cargo de <@&892422780946108456> para usar no <#911638292708085831>\n**・** Vão receber cargo vip para todos os mini-games\n\nSe interessou e quer fazer parte da staff? Basta fazer nosso formulário.\nDúvidas? Procure a responsável <@249955734958243840>.',
        image: {
            url: 'https://imgur.com/CsmmX7i.png',
        },
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),
};
