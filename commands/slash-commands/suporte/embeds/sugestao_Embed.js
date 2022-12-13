const { footerIcon, footerText } = require('../../../../global_Embeds/footer');

module.exports = {
    Embed: (title, sugestao) => {
        return {
            color: 0xffffff,
            title: `"${title}"`,
            description: `${sugestao}`,
            footer: {
                text: `${footerText}`,
                icon_url: `${footerIcon}`,
            }
        }
    }
}