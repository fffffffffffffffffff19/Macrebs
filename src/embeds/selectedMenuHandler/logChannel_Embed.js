module.exports = {
    log: (interaction, time) => ({
        color: 0xffffff,
        description: `User: <@${interaction.user.id}>\
            \nID: ${interaction.user.id}\
            \nMenu: ${interaction.values[0]}\
            \nHorário: ${time}`,
    }),
};
