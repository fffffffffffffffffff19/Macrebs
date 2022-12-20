const { log } = require('../global_Embeds/selectedMenu-handlinger/logChannel_Embed');
const { timeFull } = require('../bot-tools/time');
const { fs, path } = require('../bot-tools/fileManager');

const selectedMenu_Handler = (client, Collection) => {

    client.selectedMenus = new Collection();

    const commandDelay = new Set();
    const list = ['denuncia_Menu', 'ajuda_Menu', 'duvida_Menu', 'resgatar_Menu'];
    const menusPaths = path.join(__dirname, '../commands/');
    const menusDirs = fs.readdirSync(menusPaths);
    const paths = [];

    for (const dirs of menusDirs) {
        const dirsOf = path.join(menusPaths, dirs);
        paths.push(dirsOf);
    }

    for (const dirPath of paths) {
        const selectMenus = fs.readdirSync(dirPath).filter(filter => filter.match('selected-menu'));

        for (const menus of selectMenus) {
            const filesPath = path.join(dirPath, menus);
            const files = fs.readdirSync(filesPath).filter(filter => filter.endsWith('.js'));

            for (const file of files) {
                const filesOf = path.join(filesPath, file);
                const selectedMenu = require(filesOf);

                client.selectedMenus.set(selectedMenu.id, selectedMenu);
            }
        }
    }

    client.on('interactionCreate', async interaction => {
        if (!interaction.isSelectMenu()) return;

        const selectedMenus = await client.selectedMenus.get(interaction.values[0]);

        if (!selectedMenus) return;

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
                    await selectedMenus.execute(interaction);
                } catch (error) {
                    console.error(error);
                    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
                }

                setTimeout(() => { commandDelay.delete(interaction.user.id) }, 30000);
            }
        } else {
            try {
                await selectedMenus.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    });
}

module.exports = { selectedMenu_Handler };