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

    sejaStaffEmbed: () => ({
        color: 0xf473b9,
        title: '๑‧˚₊꒷₊˚⌇ *__Sej__a S__taf__f* !﹕༉ ✧˚₊',
        description: '・꒰ A staff é responsável por deixar a comunidade mais agradável.\n・꒰ São equipes que ajudam o servidor em suas áreas.\n・꒰ Se gostou do servidor e quer ajudar, vire staff!!\n\n✧ﾟ₊˚・ **Cargos disponíveis para ingressar** ಎ˚₊\n\n╭・<@&936600289539145751>\n﹕**♡ Equipe de Moderação ɞ**\n﹕**⌇** Responsáveis por moderar os chats ou informar dúvidas.\n﹕**⌇** Em seus turnos, monitoram os chats de texto e voz, sempre\n﹕**⌇** mantendo o ambiente em ordem, baseando-se nas regras.\n﹕⬪ . ˚* ᚙ \\🌷 ˖࿓⌣⌣⌣⌣ˎˊ˗\n﹕\n﹕・<@&936599687148994581>\n﹕**♡ Equipe de Parcerias ɞ**\n﹕**⌇** Responsáveis por fechar parcerias com outras comunidades,\n﹕**⌇** é uma peça vital para o crescimento e desenvolvimento\n﹕**⌇** do nosso servidor.\n﹕⬪ . ˚* ᚙ \\🌸 ˖࿓⌣⌣⌣⌣ˎˊ˗\n﹕\n﹕・<@&936599914014720041>\n﹕**♡ Equipe de Recepção ɞ**\n﹕**⌇** Responsáveis por recepcionar os novos membros.\n﹕**⌇** Introduzindo-os ao servidor, seja indicando canais\n﹕**⌇** ou tirando dúvidas recorrentes que todo novato pode ter.\n╰ ⬪ . ˚* ᚙ \\🎀 ˖࿓⌣⌣⌣⌣ˎˊ˗\n\n✧ﾟ₊˚・ **Requisitos para ingressar** ಎ˚₊\n\n・Ter no mínimo o primeiro cargo do rank ( <@&891385231322538004> )\n・Ser um membro ativo nos chats\n・Ter no mínimo mais de 13 anos\n・Membros da moderação devem ter mais de 16 anos\n・Membros da moderação devem ter o autenticador de dois fatores ativo\n・Não deixar de exercer a sua função\n\n*Alguns desses requisitos ainda valerão mesmo ingressando na staff, descumprimento acarretará no desligamento do mesmo.*\n\n✧ﾟ₊˚・ **Vantagem em se tornar membro Staff** ಎ˚₊\n\n**・** Recebem o vip <@&943511293036486747> ilimitadamente\n\nSe interessou e quer fazer? Basta fazer nosso formulário.\nDúvidas? Procure a responsável <@249955734958243840>.',
        image: {
            url: 'https://imgur.com/CsmmX7i.png',
        },
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),

    mercadinhoEmbed: () => ({
        color: 0x78abe9,
        title: '・ Macrebs - Mercadinho ˎˊ-',
        description: ' **⪩ ・<@&917086359460646993> = 13k Sonhos ✿. . .**\n\n> ✦ 𓂃⁩﹒Pode mandar imagens/videos em todos os chats \n> ✦ 𓂃⁩﹒Permissão para mandar emojis externos \n> ✦ 𓂃⁩﹒Cargo personalizado\n> ✦ 𓂃⁩﹒2.9x xp na loritta\n\n **⪩ ・<@&943510406289293382> = 23k Sonhos ✿. . .**\n\n> ✦ 𓂃⁩﹒Pode mandar imagens/videos em todos os chats\n> ✦ 𓂃⁩﹒Permissão para mandar emojis externos\n> ✦ 𓂃⁩﹒Participa de sorteios sem requisito\n> ✦ 𓂃⁩﹒Cargo personalizado\n> ✦ 𓂃⁩﹒3.9x xp na loritta\n\n **⪩ ・<@&943511293036486747> = 33k Sonhos ✿. . .**\n\n> ✦ 𓂃⁩﹒Pode mandar imagens/videos em todos os chats \n> ✦ 𓂃⁩﹒Permissão para mandar figurinhas externas\n> ✦ 𓂃⁩﹒Permissão para mandar emojis externos\n> ✦ 𓂃⁩﹒Participa de sorteios sem requisito\n> ✦ 𓂃⁩﹒Cargo personalizado\n> ✦ 𓂃⁩﹒4.9x xp na loritta\n\n **⪩ ・Boost de Exp no servidor ✿. . .**\n\n> ✦ 𓂃⁩﹒<@&962410433057275966> = 15k~\n> ✦ 𓂃⁩﹒<@&962410786125398016> = 19k~\n> ✦ 𓂃⁩﹒<@&962410940328996994> = 21k~\n\n**・Nota ✿. . .**\n*~ A duração do Vip é de 30 Dias ~*\n*~ A duração dos boosts de Exp são de 15 Dias ~*\n*Caso tenha interesse, chamar: <@249955734958243840>*',
        image: {
            url: 'https://i.imgur.com/gATBJFU.png',
        },
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),

    divulgeAquiEmbed: () => ({
        color: 0x5dee7a,
        title: 'ㅤ ꒰𑁬 ﹒﹒﹒Patrocine o seu servidor ﹒﹒﹒໒꒱',
        description: '╭・˃ ᴗ ˂**Você tem um servidor e gostaria de divulgar?**\n╰╮₊˚⊹**Contribua com uma taxa e poderá patrocinar um sorteio!**\nㅤ┊\n╭╯ **Inf__ormaç__ões e te__rm__os** ˎˊ-\n┊ Divulgue o seu servidor aqui, com uma taxa de \n┊100k sonhos, terá um sorteio com requisito\n┊de entrar no seu servidor!!\n┊ ⁺ . ⬫ ⊹ . ⁺ ⨯ · ༝ ₊ ⬫ ⁺ . ⬫ ⊹ . ⁺ ⨯ · ༝ ₊ ⬫\n┊╭ ・**R__equisit__os do S__ervid__or** ˎˊ-\n┊﹕🌿﹕Não ser NSFW.\n┊﹕🍀﹕Não ser servidor "promocional de nitro".\n┊﹕🍃﹕Não ser servidor de namoro ou sugestivo.\n┊﹕🌱﹕Seguir as [Regras](https://discord.com/terms) do Discord.\n┊╰ ・*Se o servidor não condizer, não poderá participar.*\n┊ ⁺ . ⬫ ⊹ . ⁺ ⨯ · ༝ ₊ ⬫ ⁺ . ⬫ ⊹ . ⁺ ⨯ · ༝ ₊ ⬫\n╰╮・Caso tenha interesse, chamar <@249955734958243840>',
        image: {
            url: 'https://cdn.discordapp.com/attachments/812011064400019507/991427453539065986/VentiDivulgue-Macrebs-byJeff4821.png',
        },
    })
};
