const { footerIcon, footerText } = require('../../../jsons/footer');

module.exports = (desabafo, imagem) => ({
    color: 0xffffff,
    title: ' ',
    description: `> ${desabafo}`,
    image: {
        url: `${imagem}`,
    },
    footer: {
        text: `${footerText}`,
        icon_url: `${footerIcon}`,
    },
});
