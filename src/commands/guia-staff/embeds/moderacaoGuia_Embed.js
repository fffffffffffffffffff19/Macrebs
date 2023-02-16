const { footerIcon, footerText } = require('../../../embeds/footer');

module.exports = {
    color: 0xffffff,
    title: '**: Um breve tutorial para ir bem na moderação :**',
    description: '**• Qual seria o objetivo da moderação •**\n⠀*A moderação é responsável por monitorar os chats e atender denuncias.*\n⠀ **└>** *Devem manter os chats/calls livres de pessoas tóxicas.*\n\n**• Como aplicar punições ? •**\n⠀*Não usamos kick, a moderação é restrita apenas ao "timeout";*\n⠀*Moderadores podem deletar mensagens nocivas;*\n⠀ **└>** *Use para manter os chats com seu devido conteúdo.*\n⠀⠀ **└>** *Após um limpamento, dê um aviso ao autor.*\n⠀ **└>** *Caso tenha dúvidas, procure um superior.*\n\n⠀*O necessário para apurar os fatos estará em um canal de log;*\n⠀ **└>** *Seja mensagem apagada ou a entrada de um membro no servidor.*\n⠀⠀ **└>** *Categoria localizada abaixo da staff.*\n\n**• Qual o critério para aplicar a punição ? •**\n⠀*Depende dos fatores, porém escute os dois lados antes;*\n⠀ **└>** *Nesse caso se for um problema menor e social.*\n⠀⠀ **└>** *Em casos de raid/possíveis, a conduta é prevenir do que remediar.*\n⠀ **└>** *Caso tenha dúvidas, procure um superior para analisar.*\n\n**• Como atender denuncias ? •**\n⠀ *Caso a denuncia não foi atendida, pergunte sobre o fato e provas;*\n⠀ **└>** *Nunca aplique punições sem provas, é seu dever apurar os fatos.*\n\n⠀ *Se for algo simples, converse com o acusado e tente resolver o conflito;*\n⠀ **└>** *Caso não seja resolvido, aplique uma punição.*\n\n⠀ *Caso um membro quebre as regras;*\n⠀ **└>** *Contate um administrador para ser aplicado o banimento.*\n\n⠀*Em casos graves e comprovados;*\n⠀ **└>** *Contate um administrador para ser aplicado o banimento.*\n\n**• Em casos de RAID •**\n⠀*É necessário que seja ágil aplicando um timeout de uma semana;*\n⠀ **└>** *Após, contate um administrador para ser aplicado o banimento.*\n\n⠀*Após ter tomado as devidas medidas, delete as mensagens do autor;*\n⠀ **└>** *Caso tenha sido várias, dê um ``/clean``.*\n\n⠀*Caso o bot tenha intervido antes, veja os logs e contate a administração;*\n⠀ **└>** *Caso seja necessário, apague as mensagens que o bot não apagou.*',
    image: {
        url: 'https://i.imgur.com/SIOi8D0.jpeg',
    },
    footer: {
        text: `${footerText}`,
        icon_url: `${footerIcon}`,
    },
};
