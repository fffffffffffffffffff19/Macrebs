const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const fs = require('node:fs');
const path = require('node:path');
const { clientId, guildId, token } = require('./config');

const commandsJSON = [];

const commandsPath = path.join(__dirname, './commands/');
const commandsDirs = fs.readdirSync(commandsPath);
const paths = [];

for (const dirs of commandsDirs) {
    const dirsOf = path.join(commandsPath, dirs);

    paths.push(dirsOf);
}

for (const files of paths) {
    const commands = fs.readdirSync(files).filter((filter) => filter.endsWith('.js'));

    for (const file of commands) {
        const fileOf = path.join(files, file);
        const commandsOf = require(fileOf);

        commandsJSON.push(commandsOf.data.toJSON());
    }
}

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commandsJSON })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
