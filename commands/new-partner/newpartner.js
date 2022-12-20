const { SlashCommandBuilder } = require('discord.js');
const { inviteAPI } = require('../../api-references/inviteAPI');
const { Normal, Animated } = require('./config/inviteHandler');
const { partnerDB } = require('../../database/db');
const { timeWeek } = require('../../bot-tools/time');
const { MsgReply, UnknowInvite, MsgNotCollected, UserDM, MsgPartnerShip, NotInfinitLink } = require('./embeds/partner_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('np')
        .setDescription('Comando para criar novas parcerias. (Leia o guia para mais informações)')
        .addMentionableOption(option => option.setName('representante').setDescription('Marque o representante.').setRequired(true))
        .addBooleanOption(option => option.setName('dm').setDescription('Enviar msg na dm do representante?').setRequired(true)),
    async execute(interaction) {
        const partnerStaff = await interaction.user.id;
        const noDM = await interaction.options.getBoolean('dm');
        const user = await interaction.options.getMentionable('representante');
        const role = await interaction.guild.roles.cache.find(role => role.id == '960244540680335400');
        const channelS = await interaction.guild.channels.cache.get('986311644093243432'); // Default-Setup: '986311644093243432' // Spam: '960641940125261874'
        const channelP = await interaction.guild.channels.cache.get('920753297676198010'); // Default-Partner: '920753297676198010' // Repositório: '918630672871063643'

        const filter = m => interaction.user.id === m.author.id && m.content.includes('https://discord.gg/');
        const collector = await interaction.channel.createMessageCollector({ filter, time: 25000, max: 2 });

        await interaction.reply({ embeds: [MsgReply()] });

        let validation = false;

        const unkInvite = async () => {
            await interaction.deleteReply();
            await collector.stop('Unknown Invite');
            return channelS.send({ embeds: [UnknowInvite()] }).then(msg => setTimeout(() => msg.delete(), 15000));
        }

        const inviteTracker = async (invite) => {
            const regExp = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z0-9]/ig;
            const regExp2 = /https:\/\/discord.gg\//ig;
            const linkExtractor = await invite.match(regExp)[0];
            const linkCode = await linkExtractor.toString().replace(regExp2, '');
            const inviteData = { linkFull: linkExtractor, linkCode: linkCode };
            return inviteData;
        }

        const inviteProcess = async (invite) => {
            const msg = await invite.content;
            const inviteClean = await inviteTracker(msg);

            await invite.delete();

            const api = await inviteAPI(inviteClean.linkCode);

            const apiData = { expires_at: api.expires_at, guilID: api.guild.id, guildName: api.guild.name, guildSize: api.approximate_member_count, guildIconID: api.guild.icon, guildBannerID: api.guild.banner, features: api.guild.features };
            const iconAnimated = `https://cdn.discordapp.com/icons/${apiData.guilID}/${apiData.guildIconID}.gif?size=4096`;
            const icon = `https://cdn.discordapp.com/icons/${apiData.guilID}/${apiData.guildIconID}.png?size=4096`;
            const bannerAnimated = `https://cdn.discordapp.com/banners/${apiData.guilID}/${apiData.guildBannerID}.gif?size=4096`;
            const banner = `https://cdn.discordapp.com/banners/${apiData.guilID}/${apiData.guildBannerID}.png?size=4096`;

            try {
                if (apiData.expires_at != null) return channelS.send({ embeds: [NotInfinitLink()] }).then(msg => setTimeout(() => { msg.delete() }, 15000))
                else if (apiData.guildSize == undefined) return unkInvite();
                else {
                    const toString = apiData.features.toString();

                    if (toString.includes('BANNER')) validation = true;

                    if (validation) await Animated(channelP, apiData.guildIconID, apiData.guildBannerID, icon, iconAnimated, banner, bannerAnimated, apiData.guildName, apiData.guildSize, inviteClean.linkFull, user, interaction, apiData.guilID, channelS);
                    else await Normal(channelP, apiData.guildIconID, icon, iconAnimated, apiData.guildName, apiData.guildSize, inviteClean.linkFull, user, interaction, apiData.guilID, channelS);

                    await collector.stop('done');
                }
            } catch (e) { console.log(e); }
        }

        collector.on('collect', async msg => await inviteProcess(msg));

        collector.on('end', async (collected, reason) => {
            if (reason === 'time') {
                await interaction.deleteReply();
                await channelS.send({ embeds: [MsgNotCollected()] }).then(msg => setTimeout(() => msg.delete(), 15000));
            } else if (reason === 'done') {
                await interaction.deleteReply();
                await user.roles.add(role);
                await channelS.send({ content: `<@${interaction.user.id}>`, embeds: [MsgPartnerShip(user)] });
                await partnerDB.create({ User_ID: user.id, Time_Created: timeWeek().timeNow, Time_Expired: timeWeek().oneWeek, Partner_Staff: partnerStaff })
                await partnerDB.findOne({ where: { User_ID: user.id } }).then(async User => {
                    if (User)
                        if (noDM) {
                            await partnerDB.update({ TimeCreate: timeWeek().timeNow, TimeExpired: timeWeek().oneWeek, PartnerStaff: partnerStaff }, { where: { UserID: `${user.id}` } })
                            await user.send({ embeds: [UserDM(user, timeWeek().timeNow, timeWeek().oneWeek)] }).catch(error => console.log(`Something went wrong while I tried to send a DM. User: ${user}`));
                        } else await partnerDB.update({ TimeCreate: timeWeek().timeNow, TimeExpired: timeWeek().oneWeek, PartnerStaff: partnerStaff }, { where: { UserID: `${user.id}` } })
                    else await partnerDB.create({ User_ID: user.id, Time_Created: timeWeek().timeNow, Time_Expired: timeWeek().oneWeek, Partner_Staff: partnerStaff })
                })
            }
        });
    }
}