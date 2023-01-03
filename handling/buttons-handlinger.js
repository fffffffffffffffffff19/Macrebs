const { log } = require('../global_Embeds/selectedMenu-handlinger/logChannel_Embed');
const { fs, path } = require('../bot-tools/fileManager');

const buttons_Handler = (client, Collection) => {

    client.buttonsfiles = new Collection();

    const buttonsPaths = path.join(__dirname, '../commands/');
    const buttonsDirs = fs.readdirSync(buttonsPaths);
    const list = ['pedirParceria_Button'];
    const commandDelay = new Set();
    const paths = [];

    for (const dirs of buttonsDirs) {
        const dirsOf = path.join(buttonsPaths, dirs);
        paths.push(dirsOf);
    }

    for (const dirPath of paths) {
        const buttons = fs.readdirSync(dirPath).filter(filter => filter.match('buttons'));

        for (const button of buttons) {
            const filesPath = path.join(dirPath, button);
            const files = fs.readdirSync(filesPath).filter(filter => filter.endsWith('.js'));

            for (const file of files) {
                const filesOf = path.join(filesPath, file);
                const buttonFile = require(filesOf);

                client.buttonsfiles.set(buttonFile.id, buttonFile);
            }
        }
    }

    client.on('interactionCreate', async interaction => {
        if (!interaction.isButton()) return;

        const buttons = client.buttonsfiles.get(interaction.customId);

        if (!buttons) return;

        const values = await interaction.values[0];
        let validation = false;
        
        for (const value of list) {
            if (values === value) validation = true
        }

        if (validation) {
            const channel = await interaction.guild.channels.cache.get('1020455873052680344');

            await channel.send({ embeds: [log(interaction, timeFull().timeNow)] });

            if (commandDelay.has(interaction.user.id)) await interaction.reply({ content: 'Espere um pouco antes de enviar novamente. **30s**', ephemeral: true });
            else {
                commandDelay.add(interaction.user.id);

                try {
                    await buttons.execute(interaction);
                } catch (error) {
                    console.error(error);
                    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
                }

                setTimeout(() => { commandDelay.delete(interaction.user.id) }, 30000);
            }
        } else {
            try {
                await buttons.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    });
};

module.exports = { buttons_Handler };