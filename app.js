const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { selectedMenu_Handler } = require('./handling/selectedMenu-handlinger');
const { commands_Handler } = require('./handling/commands-handlinger');
const { buttons_Handler } = require('./handling/buttons-handlinger');
const { events_Handler } = require('./handling/events-handlinger');
const { modals_Handler } = require('./handling/modals-hadlinger');
const { token } = require('./config');
const client = new Client({
	intents:
		[
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildMembers,
			GatewayIntentBits.GuildInvites,
			GatewayIntentBits.GuildMessages,
			GatewayIntentBits.MessageContent,
			GatewayIntentBits.DirectMessages,
			GatewayIntentBits.GuildPresences
		]
});

events_Handler(client);
buttons_Handler(client, Collection);
selectedMenu_Handler(client, Collection);
modals_Handler(client, Collection);
commands_Handler(client, Collection);

client.login(token);