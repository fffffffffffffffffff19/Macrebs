const { footerText, footerIcon } = require('../../../embeds/footer');

module.exports = {
    AllInvites: (member, uses, codes) => ({
        color: 0xFFFFFF,
        title: '**・ Macrebs - Invites ˎˊ-**',
        description: `Olá <@${member}>, aqui está uma lista de todos os seus invites.\nNo total, você convidou __${uses}__ pessoas.\n\nMeus convites:\n **${codes}**\n\nVá ao canal <#1019082474229334068> para ver os prêmios ao convidar pessoas.`,
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),

    AllInvitesMentionable: (member, uses, codes) => ({
        color: 0xFFFFFF,
        title: '**・ Macrebs - Invites ˎˊ-**',
        description: `Invites de <@${member}>\nNo total, foi convidado __${uses}__ pessoas.\n\nConvites:\n **${codes}**`,
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),

    InviteCode: (inviteCode, uses, inviterId) => ({
        color: 0xFFFFFF,
        title: '**・ Macrebs - Invites ˎˊ-**',
        description: `O invite (**${inviteCode}**) tem __${uses}__ convites.\nEste invite pertence a <@${inviterId}>\n\nVá ao canal <#1019082474229334068> para ver os prêmios ao convidar pessoas.`,
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

    NoInviteMentionable: () => ({
        color: 0xFFFFFF,
        title: '**・ Macrebs - Invites ˎˊ-**',
        description: 'Esta pessoa não tem nenhum invite criado.',
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),

    UnknownInvite: () => ({
        color: 0xFFFFFF,
        title: '**・ Macrebs - Invites ˎˊ-**',
        description: 'O código de invite inserido não existe no servidor.',
        footer: {
            text: `${footerText}`,
            icon_url: `${footerIcon}`,
        },
    }),
};
