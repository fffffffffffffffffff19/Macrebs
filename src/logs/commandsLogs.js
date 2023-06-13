const { EmbedBuilder } = require("@discordjs/builders");

module.exports = async (interaction, error) => {
    const logChannel = await interaction.guild.channels.cache.find((channel) => channel.id == '1118168060944191628');
    const command = { name: await interaction.commandName, channelId: await interaction.channelId };
    const commandRunner = { name: await interaction.user.username, id: await interaction.user.id, avatar: await interaction.user.avatar };

    console.error(error);

    const embed = new EmbedBuilder()
        .setTitle('Houve um erro ao executar um comando.')
        .setDescription(`Comando: **<** \`\`/${command.name}\`\` **>**\nQuem tentou rodar: **<** <@${commandRunner.id}> **>**\nCanal executado: **<** <#${command.channelId}> **>**`)
        .setThumbnail(`https://cdn.discordapp.com/avatars/${commandRunner.id}/${commandRunner.avatar}.png$size=4096`)
        .setColor(0xffffff);
    await logChannel.send({ embeds: [embed] });
    await logChannel.send({ content: `\`\n\`\`\`js\n${error}\`\`\`` });
};
