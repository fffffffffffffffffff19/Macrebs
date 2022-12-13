const { footerIcon, footerText } = require('../../../../global_Embeds/footer');

module.exports = {
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