const { footerText, footerIcon } = require('../../../embeds/footer');

module.exports = {
    AllInvites: (member, uses, codes) => ({
        color: 0xFFFFFF,
        title: '・ Macrebs - Invites ˎˊ-',
        description: `Olá <@${member}>, aqui está uma lista de todos os seus invites.\nUse **/info** para ver os prêmios.\n\nNo total, você convidou __${uses}__ pessoas.\n\nMeus convites:\n **${codes}**`,
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),

    InviteCode: (inviteCode, uses, inviterId) => ({
        color: 0xFFFFFF,
        title: '**・ Macrebs - Invites ˎˊ-**',
        description: `O invite (**${inviteCode}**) tem __${uses}__ convites.\nEste invite pertence a <@${inviterId}>\n\nUse **/info** para ver os prêmios.`,
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),

    NoInvite: () => ({
        color: 0xFFFFFF,
        title: '**・ Macrebs - Invites ˎˊ-**',
        description: 'Você não tem nenhum invite, crie um em <#889552544311943168>',
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),

    UnknownInvite: () => ({
        color: 0xFFFFFF,
        title: '**・ Macrebs - Invites ˎˊ-**',
        description: 'O código de invite inserido não existe no servidor ou é de outra pessoa.',
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),
};
