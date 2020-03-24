const Discord = require('discord.js');
exports.run = function(client, message, args) {
    if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription('*TEMİZLE* adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Mesajları silebilmen için `Mesajları Yönet` yetkisine sahip olmalısın.')
    return message.author.sendEmbed(botunmesajyonet);
     
  }
  let messagecount = parseInt(args.join(' '));
   const sohbetsilindi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .addField('**Eylem: **', 'Sohbet silme')
    .addField('**Yetkili: **', message.author.username)
    .addField('**Sonuç: **', `Başarılı`)
    .addField('**Kaç Adet**', + messagecount)
  if(messagecount>0){
    if(101>messagecount){
 const musti = messagecount
 message.channel.bulkDelete()
    return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
}else if(201>messagecount){
 const musti = messagecount-100
 message.channel.bulkDelete()
message.channel.bulkDelete(100);
    return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
}else if(301>messagecount){
 const baran = messagecount-200
 message.channel.bulkDelete()
message.channel.bulkDelete(100);
message.channel.bulkDelete(100);
    return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
}else if(401>messagecount){
 const baran = messagecount-300
 message.channel.bulkDelete(100)
message.channel.bulkDelete(100);
message.channel.bulkDelete(100);
message.channel.bulkDelete(100);
    return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
}else if(501>messagecount){
 const baran = messagecount-400
message.channel.bulkDelete(100)
message.channel.bulkDelete(100);
message.channel.bulkDelete(100);
message.channel.bulkDelete(100);
message.channel.bulkDelete(100);
    return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
}}};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle'],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};