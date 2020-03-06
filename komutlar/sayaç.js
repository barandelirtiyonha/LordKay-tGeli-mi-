const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
  
  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.<a:yak:681126681582501900>`);
        
  if(!args[0]) {
    message.channel.send(`Bir sayı yazmalısın.<a:yak:681126681582501900>`)
    return
  }
  
  if(!sayackanal) {
   message.channel.send(`Sayaç kanalını etiketlemelisin.<a:yak:681126681582501900>`)
  }
  
  
  if(args[0] === "sıfırla") {
    if(!sayacsayi) {
      message.channel.send(`Ayarlanmayan şeyi sıfırlayamazsın.<a:yak:681126681582501900>`)
      return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`Sayaç başarıyla sıfırlandı.<a:onay:681083728440852500>`)
    return
  }
  
  if(isNaN(args[0])) {
    message.channel.send(`Bir sayı yazmalısın.<a:yak:681126681582501900>`)
    return
  }
 
        if(args[0] <= message.guild.members.size) {
                message.channel.send(`Sunucudaki kullanıcı sayısından (${message.guild.members.size}) daha yüksek bir değer girmelisin.`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[0])
  db.set(`sayacK_${message.guild.id}`, sayackanal.name)
  
  message.channel.send(`Sayaç \`${args[0]}\`, sayaç kanalı ${sayackanal} olarak ayarlandı.<a:onay:681083728440852500>`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayac'],
        permLevel: 3
}
 
exports.help = {
        name: 'sayaç',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}