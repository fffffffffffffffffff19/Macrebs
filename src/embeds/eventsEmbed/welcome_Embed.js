const { footerIcon } = require('../footer');

module.exports = {
    WelcomeChat: (icon, memberID, guildSize) => ({
        color: 0xFFFFFF,
        thumbnail: { url: `${icon}` },
        title: ' ',
        description: `↷﹒w__elco__me <@${memberID}> ﹒\n⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀ <a:1peeposhy:889893118239989780>\n⠀⠀⠀﹒✿﹒𖥦﹒please view these channels !\n⠀⠀◖﹒<a:2Star:890658457223565313> ∙ [r__egr__as](<https://discord.com/channels/889320497244962826/889552539715010611>)﹒[re__gist__ro](<https://discord.com/channels/889320497244962826/996550472850755704>)﹒[par__ceria__s](<https://discord.com/channels/889320497244962826/1054807090138464306>)﹒<a:2Star:890658457223565313>\n﹒⬦﹒thank you for joining and __enjoy__ your stay﹒<a:1Catsuprised:1058035740224786443>`,
        footer: { text: `Agora temos ${guildSize} membros | Macrebs~~`, icon_url: `${footerIcon}` },
        timestamp: new Date().toISOString(),
    }),
};
