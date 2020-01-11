const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
    const avatar = new Discord.RichEmbed()
        .setColor(0x36393E)
        .setImage(user.avatarURL)
    message.channel.send(avatar)
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp"],
  permLevel: 0 
};

exports.help = {
  name: 'avatar',
  category: 'Kullanıcı',
  description: 'Belirtilen kişinin veya kendinizin avatarını atar.',
  usage: 'avatar <@kişi> veya +avatar'
};