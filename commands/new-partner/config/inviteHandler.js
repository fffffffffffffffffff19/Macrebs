const { NewPartnerDefaultBanner, NewPartner } = require('../embeds/partner_Embed');
const { msgPartnerDB } = require('../../../database/db');
const { timeWeek } = require('../../../bot-tools/time');
const partnerPing = '<@&940615716191756380>';

module.exports = {
    Animated: async (channelP, guildIconID, guildBannerID, icon, iconAnimated, banner, bannerAnimated, guildName, guildSize, inviteLink, user, interaction, guilID) => {
        const db = async msg => await msgPartnerDB.create({ User_ID: user.id, Msg_ID: msg.id, Guild_Name: guildName, Guild_ID: guilID, Partner_Staff: interaction.user.id, Time_Expired: timeWeek().oneWeek });
        const channelSend = {
            defaultBanner: async () => await channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartnerDefaultBanner(icon, guildName, guildSize, inviteLink, user, interaction)] }),
            staticBoth: async () => await channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartner(icon, banner, guildName, guildSize, inviteLink, user, interaction)] }),
            animatedBanner: async () => await channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartner(icon, bannerAnimated, guildName, guildSize, inviteLink, user, interaction)] }),
            animatedIcon: async () => await channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartner(iconAnimated, banner, guildName, guildSize, inviteLink, user, interaction)] }),
            animatedBoth: async () => await channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartner(iconAnimated, bannerAnimated, guildName, guildSize, inviteLink, user, interaction)] }),
        };

        if (guildBannerID && guildIconID == null || guildBannerID == null || guildIconID == null) channelSend.defaultBanner().then(msg => db(msg));

        if (!guildBannerID.startsWith('a_') && !guildIconID.startsWith('a_')) channelSend.staticBoth().then(msg => db(msg));
        else if (!guildIconID.startsWith('a_') && guildBannerID.startsWith('a_')) channelSend.animatedBanner().then(msg => db(msg));
        else if (guildIconID.startsWith('a_') && !guildBannerID.startsWith('a_')) channelSend.animatedIcon().then(msg => db(msg));
        else if (guildIconID.startsWith('a_') && guildBannerID.startsWith('a_')) channelSend.animatedBoth().then(msg => db(msg));
        else channelSend.staticBoth().then(msg => db(msg));
    },

    Normal: async (channelP, guildIconID, icon, iconAnimated, guildName, guildSize, inviteLink, user, interaction, guilID) => {
        const db = async msg => await msgPartnerDB.create({ User_ID: user.id, Msg_ID: msg.id, Guild_Name: guildName, Guild_ID: guilID, Partner_Staff: interaction.user.id, Time_Expired: timeWeek().oneWeek });
        const channelSend = {
            default: async () => await channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartnerDefaultBanner(icon, guildName, guildSize, inviteLink, user, interaction)] }),
            animatedIcon: async () => await channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartnerDefaultBanner(iconAnimated, guildName, guildSize, inviteLink, user, interaction)] }),
        };

        if (!guildIconID) channelSend.default().then(msg => db(msg));

        if (!guildIconID.startsWith('a_')) channelSend.default().then(msg => db(msg));
        else channelSend.animatedIcon().then(msg => db(msg));
    }
}
