const Discord = require('discord.js');
module.exports.run = async (bot, message, args, guild, user) => {
    let sahip = message.member
   let jsrolu = message.guild.roles.find('name', 'Rol')
  if(message.guild.id !== '687044388559257634') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komudu sadece [Kod Paylaşım](...........) sunucusunda kullanabilirsin.').setColor('RED'));
    if(!jsrolu) return message.channel.send('Bu sunucuda **JS** isminde bir rol bulunmamakta.')
      if(message.member.roles.has(jsrolu.id)) return message.channel.send('Rolü verirken bir hata ortaya çıktı. Bu hatalar şunlar olabilir:\n\n1-) Botun rolü, komudu kullanan kişinin üstünde değil.\n2-) Bota gerekli yetkileri vermemişsin.\n3-) Bu rol zaten sende bulunmakta.\n\nEğer bunları yaptıysan ve olmadıysa, ** Baran #0972 **\'e ulaş.')

  try {
      await (sahip.addRole(jsrolu.id));
      message.channel.send('Başarıyla **JS** rolü verilmiştir! :white_check_mark:')
    } catch (error) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
      return message.channel.send('Rolü verirken bir hata ortaya çıktı. Bu hatalar şunlar olabilir:\n\n1-) Botun rolü, komudu kullanan kişinin üstünde değil.\n2-) Bota gerekli yetkileri vermemişsin.\n3-) Bu rol zaten sende bulunmakta.\n\nEğer bunları yaptıysan ve olmadıysa, ** Baran #*0972 **\'e ulaş.')
   
};
}
exports.help = {
  name: 'js'
};