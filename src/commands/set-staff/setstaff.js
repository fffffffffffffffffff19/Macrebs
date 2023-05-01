const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setstaff')
        .setDescription('Dar staff a alguém.')
        .addMentionableOption((option) => option
            .setName('member')
            .setDescription('Pessoa que vai receber o cargo.')
            .setRequired(true))
        .addStringOption((option) => option
            .setName('roles')
            .setDescription('Staff list.')
            .setRequired(true)
            .addChoices(
                { name: 'Parcerias', value: '₊˚๑ Parcerias - ꒰卡꒱・₊˚ɞ' },
                { name: 'Moderação', value: '₊˚๑ Moderação - ꒰乌꒱・₊˚ɞ' },
                { name: 'Recepção', value: '₊˚๑ Recepção - ꒰阿꒱・₊˚ɞ' },
            )),
    async execute(interaction) {
        const staffRole = await interaction.options.getString('roles');
        const member = await interaction.options.getMentionable('member');
        const role = await interaction.guild.roles.cache.find((roleFind) => roleFind.name == staffRole);
        const roleStaffMain = await interaction.guild.roles.cache.find((roleFind) => roleFind.id == '996510392689905665');
        const separator = await interaction.guild.roles.cache.find((roleFind) => roleFind.id == '1041755217974280222');
        const channelStaff = await interaction.guild.channels.cache.get('939134128668946472');
        const schiavonDM = await interaction.guild.members.cache.get('249955734958243840');
        const msgs = {
            send: `*Olá <@${member.user.id}>, seja bem vindo(a/e) a staff!!*\n*Irei pedir com gentileza que dirija-se ao canal <#1021640639974211645> para ler o nosso guia dependendo de sua função.*`,
            channelStaffSend: `*Temos um novo membro da staff!!*\n*Bem vindo(a/e) <@${member.user.id}>.*`,
            error: `error ao enviar msg na dm do <@${member.user.id}>`
        };

        await member.roles.add(role);
        await member.roles.add(roleStaffMain);
        await member.roles.add(separator);

        await member.send({ content: msgs.send }).catch(() => schiavonDM.send({ content: msgs.error }));
        await interaction.reply({ content: 'Cargo foi dado com sucesso.', ephemeral: true });
        await channelStaff.send({ content: msgs.channelStaffSend });
    },
};
