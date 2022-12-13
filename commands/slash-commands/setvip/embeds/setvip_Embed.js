const { footerIcon, footerText } = require('../../../../global_Embeds/footer');

module.exports = {
    InteraReply: (member, logerChannel) => {
        return {
            color: 0xFFFFFF,
            title: '**・Vip sent!! ˎˊ-**',
            description: `> Vip sent to <@${member.id}>.\n> Check the ${logerChannel}, to view more info.`,
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    },

    VipLog: (member, vip, timeNow, timeSet) => {
        return {
            color: 0xFFFFFF,
            title: '**・Macrebs Vip Logger ˎˊ-**',
            description: `> User: <@${member.id}>\n> Buyed vip: <@&${vip.id}>`,
            fields: [
                {
                    name: 'Vip gived at:',
                    value: `${timeNow}`,
                    inline: true,
                },
                {
                    name: 'End at:',
                    value: `${timeSet}`,
                    inline: true,
                },
            ],
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    },

    VipExpired: (user, channel) => {
        return {
            color: 0xFFFFFF,
            title: '**・Macrebs・Vip ˎˊ-**',
            description: `Olá <@${user.id}>, infelizmente o seu vip expirou. :(`,
            fields: [
                {
                    name: '**__Caso queira renovar, volte na nossa loja.__**',
                    value: `${channel}`,
                    inline: true,
                },
            ],
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    }
}