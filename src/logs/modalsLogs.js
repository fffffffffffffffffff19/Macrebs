const { EmbedBuilder } = require("@discordjs/builders");

module.exports = async (interaction, error) => {
    const logChannel = await interaction.guild.channels.cache.find((channel) => channel.id == '1118168060944191628');
    const modal = { name: await interaction.customId, channelId: await interaction.channelId };
    const modalRunner = { name: await interaction.user.username, id: await interaction.user.id, avatar: await interaction.user.avatar };

    const embed = new EmbedBuilder()
        .setTitle('Houve um erro ao executar um modal.')
        .setDescription(`Modal: **<** \`\`${modal.name}\`\` **>**\nQuem tentou rodar: **<** <@${modalRunner.id}> **>**\nCanal executado: **<** <#${modal.channelId}> **>**`)
        .setThumbnail(`https://cdn.discordapp.com/avatars/${modalRunner.id}/${modalRunner.avatar}.png$size=4096`)
        .setColor(0xffffff);

    await logChannel.send({ embeds: [embed] });
    await logChannel.send({ content: `\`\n\`\`\`js\n${error}\`\`\`` });
};
