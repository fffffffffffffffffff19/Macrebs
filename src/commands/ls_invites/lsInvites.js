const { SlashCommandBuilder } = require('discord.js');
const { AllInvites, InviteCode, NoInvite, UnknownInvite, NoInviteMentionable, AllInvitesMentionable } = require('./embeds/lsInvites_Embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invites')
        .setDescription('Precisa ver os seus invites?')
        .addMentionableOption((option) => option.setName('user')
            .setDescription('Mencione uma pessoa. (Opcional)'))
        .addStringOption((option) => option.setName('code')
            .setDescription('Escreva o código do invite. (Opcional)')),
    async execute(interaction) {
        const codeString = await interaction.options.getString('code');
        const invites = await interaction.guild.invites.fetch();
        const mentionable = await interaction.options.getMentionable('user');
        const idsAll = [];

        await invites.forEach((invite) => idsAll.push(invite.inviterId));

        const inviteProcess = (member) => {
            const codesMember = [];
            let usesMember = 0;

            invites.forEach((invite) => {
                if (invite.inviterId !== member.user.id) return;

                usesMember += invite.uses;
                codesMember.push(invite.code);
            });

            const separator = codesMember.join(' - ');
            const memberInfo = { codes: separator, uses: usesMember };

            return memberInfo;
        };

        const codeProcess = () => {
            const memberCodeInfo = {
                code: '',
                uses: '',
                inviterId: '',
                validation: [],
            };

            invites.forEach((invite) => {
                memberCodeInfo.validation.push(invite.code);

                if (invite.code !== codeString) return;

                memberCodeInfo.code = invite.code;
                memberCodeInfo.uses = invite.uses;
                memberCodeInfo.inviterId = invite.inviterId;
            });

            return memberCodeInfo;
        };

        if (mentionable !== null) {
            if (!idsAll.includes(mentionable.user.id) && mentionable.user.id == interaction.user.id) return interaction.reply({ embeds: [NoInvite()], ephemeral: true });
            if (!idsAll.includes(mentionable.user.id)) return interaction.reply({ embeds: [NoInviteMentionable()], ephemeral: true });

            const { codes, uses } = inviteProcess(mentionable);

            if (mentionable.user.id == interaction.user.id) return interaction.reply({ embeds: [AllInvites(mentionable.user.id, uses, codes)], ephemeral: true });

            return interaction.reply({ embeds: [AllInvitesMentionable(mentionable.user.id, uses, codes)], ephemeral: true });
        }

        if (codeString !== null) {
            const { code, uses, inviterId, validation } = codeProcess();

            if (!validation.includes(codeString)) return interaction.reply({ embeds: [UnknownInvite()], ephemeral: true });

            return interaction.reply({ embeds: [InviteCode(code, uses, inviterId)], ephemeral: true });
        }

        if (!idsAll.includes(interaction.user.id)) return interaction.reply({ embeds: [NoInvite()], ephemeral: true });

        const { codes, uses } = inviteProcess(interaction);

        return interaction.reply({ embeds: [AllInvites(interaction.user.id, uses, codes)], ephemeral: true });
    },
};
