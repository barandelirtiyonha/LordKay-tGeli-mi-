const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`:no_entry: Reklam Filtresini Ayarlamak İçin \`cr!küfür-engel aç\` | Kapatmak İstiyorsanız \`cr!küfür-engel kapat\` Yazabilirsiniz`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:no_entry: Küfür Filtresini Ayarlamak İçin \`cr!küfür-engel aç\` | Kapatmak İstiyorsanız \`cr!küfür-engel  kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`küfürFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)
  message.channel.send(`<a:onay:681083728440852500>Küfür Filtresi başarıyla ayarlandı<a:onay:681083728440852500>`)   
    
  }

  if (args[0] == 'kapat') {
      
    db.delete(`küfürFiltre_${message.guild.id}`)
    
    message.channel.send(`<a:onay:681083728440852500>Küfür Filtresini Kapattım<a:onay:681083728440852500>`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['küfür-engel'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'reklamm',
 usage: 's$$kanal'
};