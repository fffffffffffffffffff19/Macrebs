const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');
const idade_Embed = require('./embeds/idade_Embed');
const genero_Embed = require('./embeds/genero_Embed');
const pronomes_Embed = require('./embeds/pronomes_Embed');
const regioes_Embed = require('./embeds/regioes_Embed');
const aparelhos_Embed = require('./embeds/aparelhos_Embed');
const pings_Embed = require('./embeds/pings_Embed');
const cores = require('./embeds/cores_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('register')
        .setDescription('Sistema de registro.'),
    async execute(interaction) {
        const idadeMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('idade_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ +18',
                        value: 'maior_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Segredo',
                        value: 'segredo_Menu',
                    },
                    {
                        label: '꒰🌸꒱ -18',
                        value: 'menor_Menu',
                    },
                ));
        const generoMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('genero_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ Masculino',
                        value: 'masculino_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Não-Binário',
                        value: 'non-bi_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Feminino',
                        value: 'feminino_Menu',
                    },
                ));
        const pronomesMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('pronomes_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ Ele / Dele',
                        value: 'ele_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Ela / Dela',
                        value: 'ela_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Ambos',
                        value: 'ambos_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Perguntar',
                        value: 'perguntar_Menu',
                    },
                ));
        const regioesMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('regioes_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ Brasil',
                        value: 'brasil_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Outro',
                        value: 'outro_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Portugal',
                        value: 'portugal_Menu',
                    },
                ));
        const aparelhosMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('aparelhos_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ PC',
                        value: 'pc_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Celular',
                        value: 'celular_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Consoles',
                        value: 'console_Menu',
                    },
                ));
        const pingsMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('pings_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ Avisos',
                        description: 'Fique atento aos anuncios do servidor!!',
                        value: 'avisos_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Bumper',
                        description: 'Contribua com a divulgação bumpando!!',
                        value: 'bumper_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Sorteios',
                        description: 'Receba notificações de sorteios.',
                        value: 'sorteios_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Votações',
                        description: 'Caso queira participar das votações.',
                        value: 'votacoes_Menu',
                    },
                    {
                        label: '꒰🌸꒱ Parcerias',
                        description: 'Anuncio dos nossos novos parceiros.',
                        value: 'parcerias_Menu',
                    },
                    {
                        label: '꒰🌸꒱ FreeGames',
                        description: 'Fique ligado nos jogos gratis!!',
                        value: 'freeGames_Menu',
                    },
                ));
        const roxoMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('roxo_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ - 1',
                        value: '1Roxo_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 2',
                        value: '2Roxo_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 3',
                        value: '3Roxo_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 4',
                        value: '4Roxo_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 5',
                        value: '5Roxo_Menu',
                    },
                ));
        const rosaMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('rosa_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ - 1',
                        value: '1Rosa_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 2',
                        value: '2Rosa_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 3',
                        value: '3Rosa_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 4',
                        value: '4Rosa_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 5',
                        value: '5Rosa_Menu',
                    },
                ));
        const vermelhoMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('vermelho_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ - 1',
                        value: '1Vermelho_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 2',
                        value: '2Vermelho_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 3',
                        value: '3Vermelho_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 4',
                        value: '4Vermelho_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 5',
                        value: '5Vermelho_Menu',
                    },
                ));
        const laranjaMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('laranja_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ - 1',
                        value: '1Laranja_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 2',
                        value: '2Laranja_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 3',
                        value: '3Laranja_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 4',
                        value: '4Laranja_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 5',
                        value: '5Laranja_Menu',
                    },
                ));
        const amareloMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('amarelo_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ - 1',
                        value: '1Amarelo_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 2',
                        value: '2Amarelo_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 3',
                        value: '3Amarelo_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 4',
                        value: '4Amarelo_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 5',
                        value: '5Amarelo_Menu',
                    },
                ));
        const azulMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('azul_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ - 1',
                        value: '1Azul_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 2',
                        value: '2Azul_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 3',
                        value: '3Azulo_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 4',
                        value: '4Azul_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 5',
                        value: '5Azul_Menu',
                    },
                ));
        const verdeMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('verde_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ - 1',
                        value: '1Verde_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 2',
                        value: '2Verde_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 3',
                        value: '3Verde_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 4',
                        value: '4Verde_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 5',
                        value: '5Verde_Menu',
                    },
                ));
        const marromMenu = new ActionRowBuilder().addComponents(new SelectMenuBuilder()
                .setCustomId('marrom_Menu')
                .setPlaceholder('⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱')
                .setOptions(
                    {
                        label: '꒰🌸꒱ - 1',
                        value: '1Marrom_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 2',
                        value: '2Marrom_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 3',
                        value: '3Marrom_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 4',
                        value: '4Marrom_Menu',
                    },
                    {
                        label: '꒰🌸꒱ - 5',
                        value: '5Marrom_Menu',
                    },
                ));
        const channel = await interaction.guild.channels.cache.get('960641940125261874');

        try {
            await channel.send({ embeds: [idade_Embed], components: [idadeMenu] });
            await channel.send({ embeds: [genero_Embed], components: [generoMenu] });
            await channel.send({ embeds: [pronomes_Embed], components: [pronomesMenu] });
            await channel.send({ embeds: [regioes_Embed], components: [regioesMenu] });
            await channel.send({ embeds: [aparelhos_Embed], components: [aparelhosMenu] });
            await channel.send({ embeds: [pings_Embed], components: [pingsMenu] });
            await channel.send({ embeds: [cores.roxo()], components: [roxoMenu] });
            await channel.send({ embeds: [cores.rosa()], components: [rosaMenu] });
            await channel.send({ embeds: [cores.vermelho()], components: [vermelhoMenu] });
            await channel.send({ embeds: [cores.laranja()], components: [laranjaMenu] });
            await channel.send({ embeds: [cores.amarelo()], components: [amareloMenu] });
            await channel.send({ embeds: [cores.azul()], components: [azulMenu] });
            await channel.send({ embeds: [cores.verde()], components: [verdeMenu] });
            await channel.send({ embeds: [cores.marrom()], components: [marromMenu] });
            await interaction.reply({ content: 'Sent!!', ephemeral: true });
        } catch (e) { console.log(e); }
    }
}