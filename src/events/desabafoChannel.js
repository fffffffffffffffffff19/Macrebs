const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    once: false,
    async execute(msg) {
        if (msg.channelId != '1051633625159962674') return;

        await msg.startThread({
            name: '꒰ᐢ • ˕ • ᐢ꒱ Mande seu apoio aqui. ˎˊ˗',
            autoArchiveDuration: 60,
        }).catch(() => msg.delete());
    },
};
