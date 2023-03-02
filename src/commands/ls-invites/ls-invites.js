const { SlashCommandBuilder } = require('discord.js');
const { AllInvites, InviteCode, NoInvite, UnknownInvite } = require('./embeds/lsInvites_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invites')
        .setDescription('Precisa ver os seus invites?')
        .addStringOption((option) => option.setName('code')
            .setDescription('Escreva o código do invite. (Opcional)'))
        .addMentionableOption((option) => option.setName('user')
            .setDescription('Mencione uma pessoa. (Opcional)')),
    async execute(interaction) {
        const codeString = await interaction.options.getString('code');
        const invites = await interaction.guild.invites.fetch();
        const mentionable = await interaction.options.getMentiolable('user');

        const allInvites = (invite) => {
            console.log(invite);
        };

        // fazer uma condicional para mostrar todos os invites de um mencionado
        if (mentionable !== null) {
            return allInvites(invites);
        }

        if (codeString !== null) {
            return invites.forEach((invite) => {
                if (invite.code !== codeString) return;

                interaction.reply({ embeds: [InviteCode(invite.code, invite.uses, invite.inviterId)], ephemeral: true });
            });
        }

        const idsAll = [];

        await invites.forEach((invite) => idsAll.push(invite.inviterId));

        if (!idsAll.includes(interaction.user.id)) return interaction.reply({ embeds: [NoInvite()], ephemeral: true });

        const codesMember = [];
        let usesMember = 0;

        await invites.forEach(async (invite) => {
            if (invite.inviterId !== interaction.user.id) return;

            usesMember += invite.uses;
            codesMember.push(invite.code);
        });

        if (!codesMember.includes(codeString)) return interaction.reply({ embeds: [UnknownInvite()], ephemeral: true });

        const separator = codesMember.join(' - ');

        interaction.reply({ embeds: [AllInvites(interaction.user.id, usesMember, separator)], ephemeral: true });
    },
};
