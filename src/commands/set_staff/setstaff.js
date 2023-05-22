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
                { name: 'Parcerias', value: '936599687148994581' },
                { name: 'Moderação', value: '936600289539145751' },
                { name: 'Recepção', value: '936599914014720041' },
            )),
    async execute(interaction) {
        const staffRoleOption = await interaction.options.getString('roles');
        const memberOption = await interaction.options.getMentionable('member');

        const staffRole = await interaction.guild.roles.cache.find((roleFind) => roleFind.id == staffRoleOption); // Cargo das categorias da staff
        const roleStaffMain = await interaction.guild.roles.cache.find((roleFind) => roleFind.id == '996510392689905665'); // Cargo principal "₊˚๑ Staff・₊˚ɞ"
        const separator = await interaction.guild.roles.cache.find((roleFind) => roleFind.id == '1041755217974280222'); // Cargo para separar categorias "՞ ⸝⸝>  ̫ <⸝⸝ ՞ . : ｡✿ ʚ Administração ɞ ♡"
        const vipRole = await interaction.guild.roles.cache.find((roleFind) => roleFind.id == '943511293036486747'); // Cargo vip que é recompensa "₊˚꒰⭐ Macrabizant ⭐꒱・₊"
        const channelStaff = await interaction.guild.channels.cache.get('939134128668946472');
        const schiavonDM = await interaction.guild.members.cache.get('249955734958243840');

        const msgs = {
            send: `*Olá <@${memberOption.user.id}>, seja bem vindo(a/e) a staff!!*\n*Irei pedir com gentileza que dirija-se ao canal <#1021640639974211645> para ler o nosso guia dependendo de sua função.*`,
            channelStaffSend: `*Temos um novo membro da staff!!*\n*Bem vindo(a/e) <@${memberOption.user.id}>.*`,
            error: `Error ao enviar msg na dm do <@${memberOption.user.id}>/nComando rodado "/setstaff"`
        };

        await memberOption.roles.add(staffRole);
        await memberOption.roles.add(roleStaffMain);
        await memberOption.roles.add(separator);
        await memberOption.roles.add(vipRole);

        await memberOption.send({ content: msgs.send }).catch(() => schiavonDM.send({ content: msgs.error }));
        await interaction.reply({ content: 'Cargo foi dado com sucesso.', ephemeral: true });
        await channelStaff.send({ content: msgs.channelStaffSend });
    },
};
