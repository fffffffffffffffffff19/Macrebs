module.exports = {
    log: (interaction, time) => {
        return {
            color: 0xfffff,
            description: `User: <@${interaction.user.id}>\
            \nID: ${interaction.user.id}\
            \nMenu: ${interaction.customId}\
            \nHorário: ${time}`,
        }
    }
}