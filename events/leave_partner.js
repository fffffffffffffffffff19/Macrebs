const { partnerDB, msgPartnerDB } = require('../database/db');
const { PartnerLeave } = require('../commands/new-partner/embeds/partner_Embed');

module.exports = {
    name: 'guildMemberRemove',
    async execute(user) {
        const partnerChannel = await user.guild.channels.cache.get('920753297676198010');
        const exit_Log = await user.guild.channels.cache.get('998624881816129597');
        await partnerDB.findOne({ where: { User_ID: user.id } }).then(async User => {
            if (User) {
                await msgPartnerDB.findAll({ where: { User_ID: user.id } }).then(async User => {
                    if (!User) return
                    else {
                        for (const db of User) {
                            let Data_ID = await db.dataValues.id;
                            let Msg_ID = await db.dataValues.Msg_ID;
                            let User_ID = await db.dataValues.User_ID;
                            let Guild_Name = await db.dataValues.Guild_Name;
                            let Guild_ID = await db.dataValues.Guild_ID;
                            let Partner_Staff = await db.dataValues.Partner_Staff;

                            await partnerChannel.messages.fetch(Msg_ID).then(msg => msg.delete());
                            await msgPartnerDB.destroy({ where: { User_ID: user.id } })
                            await partnerDB.destroy({ where: { User_ID: user.id } })
                            await exit_Log.send({ embeds: [PartnerLeave(Data_ID, User_ID, Guild_Name, Guild_ID, Partner_Staff)] })
                        }
                    }
                })
            }
        })
    }
}