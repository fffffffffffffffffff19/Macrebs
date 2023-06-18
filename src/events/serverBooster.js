const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildMemberUpdate,
    once: false,
    async execute(oldMember, newMember) {
        if (!oldMember.roles.cache.size == newMember.roles.cache.size) return;
        if (!oldMember.roles.cache.has('913256048528334888') && newMember.roles.cache.has('913256048528334888')) {
            const boostChannel = await newMember.guild.channels.cache.get('889683545407238234');
            await newMember.send({ content: `***Obrigada pelo boost!!***\n*Visite o canal de __<#889683545407238234>__ para resgatar os seus prêmios.*` }).catch((e) => console.log(e));

            await boostChannel.send({ content: `▁▁__▁̊ ̟۰__▁▁__▁̟̊۰____<@${newMember.user.id}>__▁__▁̊ ̟۰▁▁▁__▁̊ ̟۰__▁▁\n⊹₊˚ \🥮\🎗️ ⺌**Obrigada pela gentileza de ceder o seu boost**﹑﹒૪꒷꒥\⭐\🎀\n—↷ ⸝\🪷  **Vá ao __<#889683545407238234>__ para resgatar os seus benefícios**⸝⸝*!♡ !* ଘ\🍮 \🍰||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||||||||||https://i.imgur.com/nQvVfvN.gif` });
        }
    }
};
