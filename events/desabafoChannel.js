module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(msg) {
        return
        if (msg.channelId != '1051633625159962674') return

        await msg.startThread({
            name: '꒰ᐢ • ˕ • ᐢ꒱ Mande seu apoio aqui. ˎˊ˗',
            autoArchiveDuration: 60
        }).catch(async () => await msg.delete());
    }
}