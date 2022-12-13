const { fs, path } = require('../bot-tools/fileManager');

const events_Handler = (client) => {
	const eventsPath = path.join(__dirname, '../events');
	const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

	for (const file of eventFiles) {
		const fileOf = path.join(eventsPath, file);
		const event = require(fileOf);
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args));
		} else {
			client.on(event.name, (...args) => event.execute(...args));
		}
	}
};

module.exports = { events_Handler };