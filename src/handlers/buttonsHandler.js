const fs = require('node:fs');
const path = require('node:path');
const { Events, Collection } = require('discord.js');
const { log } = require('../embeds/selectedMenuHandler/logChannel_Embed');
const { sequelize, DataTypes } = require('../database/database');
const commandDelay = require('../database/models/commandDelay')(sequelize, DataTypes);
const { epoch } = require('../tools/time');

module.exports = (client) => {
    client.buttonsfiles = new Collection();

    const buttonsPaths = path.join(__dirname, '../commands/');
    const buttonsDirs = fs.readdirSync(buttonsPaths);
    const list = ['pedirParceriasButton'];
    const paths = [];

    for (const dirs of buttonsDirs) {
        const dirsOf = path.join(buttonsPaths, dirs);
        paths.push(dirsOf);
    }

    for (const dirPath of paths) {
        const buttons = fs.readdirSync(dirPath).filter((filter) => filter.match('buttons'));

        for (const button of buttons) {
            const filesPath = path.join(dirPath, button);
            const files = fs.readdirSync(filesPath).filter((filter) => filter.endsWith('.js'));

            for (const file of files) {
                const filesOf = path.join(filesPath, file);
                const buttonFile = require(filesOf);

                client.buttonsfiles.set(buttonFile.id, buttonFile);
            }
        }
    }

    client.on(Events.InteractionCreate, async (interaction) => {
        if (!interaction.isButton()) return;

        const buttons = client.buttonsfiles.get(interaction.customId);

        if (!buttons) return;

        const values = await interaction.customId;
        let validation = false;

        for (const value of list) {
            if (values === value) validation = true;
        }

        if (!validation) {
            try {
                await buttons.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        } else {
            const channel = await interaction.guild.channels.cache.get('1020455873052680344');
            const userId = await interaction.user.id;
            const useDelay = await commandDelay.findOne({ where: { memberId: userId } });

            const database = async (clear) => {
                if (clear) return setTimeout(() => commandDelay.destroy({ where: { memberId: userId } }), 30000);

                await commandDelay.create({ memberId: userId });
                setTimeout(() => commandDelay.destroy({ where: { memberId: userId } }), 30000);
            };

            await channel.send({ embeds: [log(interaction, epoch())] });

            if (useDelay !== null) {
                await interaction.reply({ content: '*Eii!!* Espere um pouco antes de executar novamente. **30s** >:(', ephemeral: true });
                database(true);
            } else {
                try {
                    await database(false);
                    await buttons.execute(interaction);
                } catch (error) {
                    console.error(error);
                    await interaction.reply({ content: '*Putsss!!* Tive um problema ao executar esse botão, caso aconteça novamente, informe um staff do problema. \n**"Erro ao executar o botão"**', ephemeral: true });
                }
            }
        }
    });
};
