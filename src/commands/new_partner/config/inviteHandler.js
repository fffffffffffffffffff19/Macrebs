const { NewPartnerDefaultBanner, NewPartner } = require('../embeds/partner_Embed');
const { sequelize, DataTypes } = require('../../../database/database');
const msgPartnerDB = require('../../../database/models/msgPartner')(sequelize, DataTypes);
const { timeWeek } = require('../../../tools/time');

const partnerPing = '<@&940615716191756380>';

const db = (msg, user, guildNAME, guilID, interaction) => msgPartnerDB.create({ userId: user.id, msgId: msg.id, guildName: guildNAME, guildId: guilID, partnerStaff: interaction.user.id, timeExpired: timeWeek().oneWeek });

module.exports = {
    Animated: (channelP, guildIconID, guildBannerID, icon, iconAnimated, banner, bannerAnimated, guildNAME, guildSize, inviteLink, user, interaction, guilID) => {
        const channelSend = {
            defaultBanner: () => channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartnerDefaultBanner(icon, guildNAME, guildSize, inviteLink, user, interaction)] }),
            staticBoth: () => channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartner(icon, banner, guildNAME, guildSize, inviteLink, user, interaction)] }),
            animatedBanner: () => channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartner(icon, bannerAnimated, guildNAME, guildSize, inviteLink, user, interaction)] }),
            animatedIcon: () => channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartner(iconAnimated, banner, guildNAME, guildSize, inviteLink, user, interaction)] }),
            animatedBoth: () => channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartner(iconAnimated, bannerAnimated, guildNAME, guildSize, inviteLink, user, interaction)] }),
        };

        if (guildBannerID == null || guildIconID == null) channelSend.defaultBanner().then((msg) => db(msg, user, guildNAME, guilID, interaction));

        if (!guildBannerID.startsWith('a_') && !guildIconID.startsWith('a_')) channelSend.staticBoth().then((msg) => db(msg, user, guildNAME, guilID, interaction));
        else if (!guildIconID.startsWith('a_') && guildBannerID.startsWith('a_')) channelSend.animatedBanner().then((msg) => db(msg, user, guildNAME, guilID, interaction));
        else if (guildIconID.startsWith('a_') && !guildBannerID.startsWith('a_')) channelSend.animatedIcon().then((msg) => db(msg, user, guildNAME, guilID, interaction));
        else if (guildIconID.startsWith('a_') && guildBannerID.startsWith('a_')) channelSend.animatedBoth().then((msg) => db(msg, user, guildNAME, guilID, interaction));
        else channelSend.staticBoth().then((msg) => db(msg, user, guildNAME, guilID, interaction));
    },

    Normal: (channelP, guildIconID, icon, iconAnimated, guildNAME, guildSize, inviteLink, user, interaction, guilID) => {
        const channelSend = {
            default: () => channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartnerDefaultBanner(icon, guildNAME, guildSize, inviteLink, user, interaction)] }),
            animatedIcon: () => channelP.send({ content: `${partnerPing} ${inviteLink}`, embeds: [NewPartnerDefaultBanner(iconAnimated, guildNAME, guildSize, inviteLink, user, interaction)] }),
        };

        if (!guildIconID) channelSend.default().then((msg) => db(msg, user, guildNAME, guilID, interaction));

        if (!guildIconID.startsWith('a_')) channelSend.default().then((msg) => db(msg, user, guildNAME, guilID, interaction));
        else channelSend.animatedIcon().then((msg) => db(msg, user, guildNAME, guilID, interaction));
    },
};
