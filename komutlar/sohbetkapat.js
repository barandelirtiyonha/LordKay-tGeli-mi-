const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(` Bu komudu kullanabilmek için "ADMINISTRATOR" yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`:no_entry: Sohbeti Kapatmak İçin \`cr!sohbet aç \` | Kapatmak İstiyorsanız \`cr!sohbet kapat\` Yazabilirsiniz`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:no_entry: Sohbeti i Kapatmak İçin \`cr!sohbet aç\` | Kapatmak İstiyorsanız \`cr!sohbet kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`sohbet_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)
  message.channel.send(`<a:onay:681083728440852500>Küfür Filtresi başarıyla ayarlandı<a:onay:681083728440852500>`)   
    
  }

  if (args[0] == 'kapat') {
      
    db.delete(`sohbet_${message.guild.id}`)
    
    message.channel.send(`<a:onay:681083728440852500>Küfür Filtresini Kapattım<a:onay:681083728440852500>`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: [''],
 permLevel: 0
};

exports.help = {
 name: 'sohbet',
 description: 'reklamm',
 usage: 's$$kanal'
};