module.exports = {
    log: (interaction, time, menu) => ({
        color: 0xffffff,
        description: `User: <@${interaction.user.id}>\
            \nID: ${interaction.user.id}\
            \nMenu: ${menu}\
            \nHorário: ${time}`,
    }),
};
