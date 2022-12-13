const { footerIcon, footerText } = require('../../../../global_Embeds/footer');
const imagemBannerDefault = 'https://i.imgur.com/CmQk6Vj.png';

module.exports = {
    //  INVITE PROCESS MSG
    MsgReply: () => {
        return {
            color: 0xFFFFFF,
            title: '**・Macrebs・Partner ˎˊ-**',
            description: `Mande o invite para fechar a parceria.`,
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    },

    NewPartner: (icon, banner, guildName, guildSize, inviteLink, user, interaction) => {
        return {
            color: 0xFFFFFF,
            title: `${guildName}`,
            url: `${inviteLink}`,
            description: `Obrigada, **${guildName}**, pela sua parceria!!
            Atualmente eles tem **${guildSize}** Membros! com esta parceria, esperamos que consigam **${guildSize + 25}** Membros! vamos lá pessoal, o servidor é super divertido.\n
            **Servidor:** [${guildName}](${inviteLink}) ~ Membros: ${guildSize}
            **Representante:** <@${user.id}>
            **Responsável:** <@${interaction.user.id}>`,
            image: {
                url: `${banner}`,
            },
            thumbnail: {
                url: `${icon}`,
            },
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    },

    NewPartnerDefaultBanner: (icon, guildName, guildSize, inviteLink, user, interaction) => {
        return {
            color: 0xFFFFFF,
            title: `${guildName}`,
            url: `${inviteLink}`,
            description: `Obrigada, **${guildName}**, pela sua parceria!!
            Atualmente eles tem **${guildSize}** Membros! com esta parceria, esperamos que consigam **${guildSize + 25}** Membros! vamos lá pessoal, o servidor é super divertido.\n
            **Se__rvido__r:** [${guildName}](${inviteLink}) ~ M__embr__os: **${guildSize}**
            **Representante:** <@${user.id}>
            **Responsável:** <@${interaction.user.id}>`,
            image: {
                url: `${imagemBannerDefault}`,
            },
            thumbnail: {
                url: `${icon}`,
            },
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    },
    //  SUCESS MSG
    MsgPartnerShip: user => {
        return {
            color: 0xFFFFFF,
            title: '**・Macrebs・Partner ˎˊ-**',
            description: `Parceria fechada com <@${user.id}>.\nInvite enviado para o canal de <#920753297676198010>.`,
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    },
    UserDM: (user, partnerTime, partnerExpireTime) => {
        return {
            color: 0xFFFFFF,
            title: '˃ ᴗ ˂ : Macrebs・Partner ! 𓂃 ‹3',
            description: `. * 　　 ✦ . 　⁺ 　 . ⁺ 　<a:1Stars:985811138119864340> ✦ .⁺\n˚ ̟☆ **Obrigada**﹒<@${user.id}>, agradecemos pela sua parceria!\n˚ ̟☆ **Nota**﹒**( ੭ ˙꒳​˙ )੭** Caso o representante saia, a parceria é desfeita.\n. * 　　 ✦ . 　⁺ 　 . ⁺ 　<a:2Stars:985811138119864340> ✦ .⁺\n\n˚ ̟☆ **Nota**﹒A parceria expirará em 7 dias, retorne para renovar.`,
            image: {
                url: 'https://i.imgur.com/WzKUHWV.png'
            },
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            },
            fields: [
                {
                    name: 'Parceria criada em:',
                    value: `**__${partnerTime}__**`,
                    inline: true,
                },
                {
                    name: 'Parceria expira em:',
                    value: `**__${partnerExpireTime}__**`,
                    inline: true,
                }
            ],
        }
    },
    //  ERROR MSG
    MsgNotCollected: () => {
        return {
            color: 0xFFFFFF,
            title: '**・Macrebs・Partner ˎˊ-**',
            description: `Nenhum invite enviado, comando cancelado.`,
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    },

    UnknowInvite: () => {
        return {
            color: 0xFFFFFF,
            title: '**・Macrebs・Partner ˎˊ-**',
            description: '',
            fields: [
                {
                    name: 'Invite inválido.',
                    value: '*Verifique com o representante se o link é válido.*',
                },
            ],
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    },

    NotInfinitLink: () => {
        return {
            color: 0xFFFFFF,
            title: '**・Macrebs・Partner ˎˊ-**',
            description: '',
            fields: [
                {
                    name: 'Invite não é infinito.',
                    value: '*Comunique o representante para trocar o invite por um infinito.*',
                },
            ],
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    },
    //  DB MSG
    PartnerLeave: (Data_ID, User_ID, Guild_Name, Guild_ID, Partner_Staff) => {
        return {
            color: 0xFFFFFF,
            title: '˃ ᴗ ˂ : Partner・Log ! 𓂃 ‹3',
            description: `Um parceiro deixou o servidor e seu invite foi apagado.\n\n**#${Data_ID}**`,
            fields: [
                {
                    name: 'Representante:',
                    value: `<@${User_ID}>`,
                    inline: false,
                },
                {
                    name: 'Servidor:',
                    value: `Nome: \`${Guild_Name}\`\nID: \`${Guild_ID}\``,
                    inline: false,
                },
                {
                    name: 'Info:',
                    value: `Responsável pela parceria: <@${Partner_Staff}>`,
                    inline: false,
                }
            ],
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    },

    PartnerExpired: (user, channelPartner) => {
        return {
            color: 0xFFFFFF,
            title: '**・Macrebs・Partner ˎˊ-**',
            description: `Olá, <@${user.id}> sua parceria expirou. Com isso, perderá o cargo de parceiro oficial do servidor, para recupera-la, faça uma nova parceria com a gente.`,
            image: {
                url: 'https://i.imgur.com/WzKUHWV.png'
            },
            fields: [
            {
                    name: '**・Renove agoraˎˊ-**',
                    value: `**__Canal de parcerias__** **⤳** __<#${channelPartner.id}>__`,
                    inline: false,
                },
            ],
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    }
}