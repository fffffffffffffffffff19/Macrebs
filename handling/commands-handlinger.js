const { fs, path } = require('../bot-tools/fileManager');

const commands_Handler = async (client, Collection) => {
	client.commands = new Collection();

	const commandsPath = path.join(__dirname, '../commands/slash-commands/');
	const commandsDirs = fs.readdirSync(commandsPath);
	const paths = [];

	for (const dirs of commandsDirs) {
		const dirsOf = path.join(commandsPath, dirs);

		paths.push(dirsOf);
	}

	for (const files of paths) {
		const commands = fs.readdirSync(files).filter(filter => filter.endsWith('.js'));

		for (const file of commands) {
			const fileOf = path.join(files, file);
			const commandsOf = require(fileOf);

			client.commands.set(commandsOf.data.name, commandsOf);
		}
	}

	client.on('interactionCreate', async interaction => {
		if (!interaction.isChatInputCommand()) return;

		const command = client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	});
};

module.exports = { commands_Handler };