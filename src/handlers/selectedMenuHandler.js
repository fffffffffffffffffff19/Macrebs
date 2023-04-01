const fs = require('node:fs');
const path = require('node:path');
const { Events, Collection } = require('discord.js');
const { log } = require('../embeds/selectedMenuHandler/logChannel_Embed');
const { sequelize, DataTypes } = require('../database/database');
const commandDelay = require('../database/models/commandDelay')(sequelize, DataTypes);
const { epoch } = require('../tools/time');

module.exports = (client) => {
    client.selectedMenus = new Collection();

    const list = ['denunciaMenu', 'ajudaMenu', 'duvidaMenu', 'desabafoMenu'];
    const menusPaths = path.join(__dirname, '../', 'commands');
    const menusDirs = fs.readdirSync(menusPaths);
    const paths = [];

    for (const dirs of menusDirs) {
        const dirsOf = path.join(menusPaths, dirs);
        paths.push(dirsOf);
    }

    for (const dirPath of paths) {
        const selectMenus = fs.readdirSync(dirPath).filter((filter) => filter.match('selected-menu'));

        for (const menus of selectMenus) {
            const filesPath = path.join(dirPath, menus);
            const files = fs.readdirSync(filesPath).filter((filter) => filter.endsWith('.js'));

            for (const file of files) {
                const filesOf = path.join(filesPath, file);
                const selectedMenu = require(filesOf);

                client.selectedMenus.set(selectedMenu.id, selectedMenu);
            }
        }
    }

    client.on(Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        const selectedMenus = await client.selectedMenus.get(interaction.values[0]);

        if (!selectedMenus) return;

        const values = await interaction.values[0];
        let validation = false;

        for (const value of list) {
            if (values === value) validation = true;
        }

        if (!validation) {
            try {
                await selectedMenus.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: '*Putsss!!* Tive um problema ao executar esse menu, caso aconteça novamente, informe um staff do problema. **"Erro ao executar o menu"**', ephemeral: true });
            }
        } else {
            const channel = await interaction.guild.channels.cache.get('1091746083287334982');
            const userId = await interaction.user.id;
            const useDelay = await commandDelay.findOne({ where: { memberId: userId } });

            await channel.send({ embeds: [log(interaction, epoch())] });

            if (useDelay !== null) await interaction.reply({ content: '*Eii!!* Espere um pouco antes de executar novamente. **30s** >:(', ephemeral: true });
            else {
                try {
                    await commandDelay.create({ memberId: userId });
                    await selectedMenus.execute(interaction);
                } catch (error) {
                    console.error(error);
                    await interaction.reply({ content: '*Putsss!!* Tive um problema ao executar esse menu, caso aconteça novamente, informe um staff do problema. \n**"Erro ao executar o menu"**', ephemeral: true });
                }

                setTimeout(() => commandDelay.destroy({ where: { memberId: userId } }), 30000);
            }
        }
    });
};
