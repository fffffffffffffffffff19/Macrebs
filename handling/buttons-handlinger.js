const { fs, path } = require('../bot-tools/fileManager');

const buttons_Handler = (client, Collection) => {

    client.buttonsfiles = new Collection();

    const buttonsPaths = path.join(__dirname, '../commands/');
    const buttonsDirs = fs.readdirSync(buttonsPaths);
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

        try {
            await buttons.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    });
};

module.exports = { buttons_Handler };