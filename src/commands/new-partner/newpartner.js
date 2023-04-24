const { SlashCommandBuilder } = require('discord.js');
const { inviteAPI } = require('../../apis/inviteAPI');
const { Normal, Animated } = require('./config/inviteHandler');
const { MsgReply, UnknowInvite, MsgNotCollected, UserDM, MsgPartnerShip, NotInfinitLink } = require('./embeds/partner_Embed');
const { sequelize, DataTypes } = require('../../database/database');
const partnerDB = require('../../database/models/partner')(sequelize, DataTypes);
const { timeWeek } = require('../../tools/time');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('np')
        .setDescription('Comando para criar novas parcerias. (Leia o guia para mais informações)')
        .addMentionableOption((option) => option.setName('representante').setDescription('Marque o representante.').setRequired(true))
        .addBooleanOption((option) => option.setName('dm').setDescription('Enviar msg na dm do representante?').setRequired(true)),
    async execute(interaction) {
        const partnerStaffUserId = await interaction.user.id;
        const noDM = await interaction.options.getBoolean('dm');
        const user = await interaction.options.getMentionable('representante');
        const partnerRole = await interaction.guild.roles.cache.find((role) => role.id === '960244540680335400');
        const channelS = await interaction.guild.channels.cache.get('986311644093243432'); // Default-Setup: '986311644093243432' // Spam: '960641940125261874'
        const channelP = await interaction.guild.channels.cache.get('920753297676198010'); // Default-Partner: '920753297676198010' // Repositório: '918630672871063643'

        const filter = (m) => interaction.user.id === m.author.id && m.content.includes('https://discord.gg/');
        const collector = await interaction.channel.createMessageCollector({ filter, time: 25000, max: 2 });

        await interaction.reply({ embeds: [MsgReply()] });

        let validation = false;

        const unkInvite = async () => {
            await interaction.deleteReply();
            await collector.stop('Unknown Invite');
            return channelS.send({ embeds: [UnknowInvite()] }).then((msg) => setTimeout(() => msg.delete(), 15000));
        };

        const inviteTracker = async (invite) => {
            const regExp = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z0-9]/ig;
            const regExp2 = /https:\/\/discord.gg\//ig;
            const linkExtractor = await invite.match(regExp)[0];
            const linkCode = await linkExtractor.toString().replace(regExp2, '');
            const inviteData = { linkFull: linkExtractor, linkCode };
            return inviteData;
        };

        const inviteProcess = async (invite) => {
            const msg = await invite.content;
            const inviteClean = await inviteTracker(msg);

            await invite.delete();

            const { expires_at, guild, approximate_member_count } = await inviteAPI(inviteClean.linkCode);

            const iconAnimated = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.gif?size=4096`;
            const icon = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=4096`;
            const bannerAnimated = `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.gif?size=4096`;
            const banner = `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=4096`;

            try {
                if (expires_at !== null) return channelS.send({ embeds: [NotInfinitLink()] }).then((message) => setTimeout(() => message.delete(), 15000));

                if (approximate_member_count == undefined) return unkInvite();

                const toString = guild.features.toString();

                if (toString.includes('BANNER')) validation = true;

                if (validation) Animated(channelP, guild.icon, guild.banner, icon, iconAnimated, banner, bannerAnimated, guild.name, approximate_member_count, inviteClean.linkFull, user, interaction, guild.id, channelS);
                else Normal(channelP, guild.icon, icon, iconAnimated, guild.name, approximate_member_count, inviteClean.linkFull, user, interaction, guild.id, channelS);

                await collector.stop('done');
            } catch (e) { console.log(e); }
        };

        collector.on('collect', (msg) => inviteProcess(msg));

        collector.on('end', async (collected, reason) => {
            if (reason === 'time') {
                await interaction.deleteReply();
                await channelS.send({ embeds: [MsgNotCollected()] }).then((msg) => setTimeout(() => msg.delete(), 15000));
            } else if (reason === 'done') {
                await interaction.deleteReply();
                await user.roles.add(partnerRole);
                await channelS.send({ content: `<@${interaction.user.id}>`, embeds: [MsgPartnerShip(user)] });
                await partnerDB.create({ userId: user.id, timeCreated: timeWeek().timeNow, timeExpired: timeWeek().oneWeek, partnerStaff: partnerStaffUserId });
                await partnerDB.findOne({ where: { userId: user.id } }).then(async (User) => {
                    if (User) {
                        if (noDM) {
                            await partnerDB.update({ timeCreated: timeWeek().timeNow, timeExpired: timeWeek().oneWeek, partnerStaff: partnerStaffUserId }, { where: { userId: user.id } });
                            await user.send({ embeds: [UserDM(user, timeWeek().timeNow, timeWeek().oneWeek)] }).catch(() => console.log('dm not open'));
                        } else await partnerDB.update({ timeCreated: timeWeek().timeNow, timeExpired: timeWeek().oneWeek, partnerStaff: partnerStaffUserId }, { where: { userId: user.id } });
                    } else await partnerDB.create({ userId: user.id, timeCreated: timeWeek().timeNow, timeExpired: timeWeek().oneWeek, partnerStaff: partnerStaffUserId });
                });
            }
        });
    },
};
