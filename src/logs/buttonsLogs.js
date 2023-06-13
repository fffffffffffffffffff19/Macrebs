const { EmbedBuilder } = require("@discordjs/builders");

module.exports = async (interaction, error) => {
    const logChannel = await interaction.guild.channels.cache.find((channel) => channel.id == '1118168060944191628');
    const button = { name: await interaction.customId, channelId: await interaction.channelId };
    const buttonRunner = { name: await interaction.user.username, id: await interaction.user.id, avatar: await interaction.user.avatar };

    console.error(error);

    const embed = new EmbedBuilder()
        .setTitle('Houve um erro ao executar um botão.')
        .setDescription(`Botão: **<** \`\`${button.name}\`\` **>**\nQuem tentou rodar: **<** <@${buttonRunner.id}> **>**\nCanal executado: **<** <#${button.channelId}> **>**`)
        .setThumbnail(`https://cdn.discordapp.com/avatars/${buttonRunner.id}/${buttonRunner.avatar}.png$size=4096`)
        .setColor(0xffffff);

    await logChannel.send({ embeds: [embed] });
    await logChannel.send({ content: `\`\n\`\`\`js\n${error}\`\`\`` });
};
