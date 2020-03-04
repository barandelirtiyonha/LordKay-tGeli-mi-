const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('681938616611897365') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#00ff1f')
        .setTitle(`<a:te:681510124178767892>${client.user.username} - DDOS Bilgi <a:te2:681510124568707084>`)
        .setDescription(`DDOS-Koruma Hakında
Discord Sunucularına Saldırı Olduğunda Sunucunuzun Bögesini Değiştirir Ve Sunucunuzu Ping Ten Korur

Nası Açılır Bir Yazı Oda Kurun Adı:ddos-koruma Adını Değiştirirseniz Çalışmaz!

Unutma Sadece 1000 Ping Olunca Çalışır Ve ddos-koruma Odasına Hep Mesaj Atmaz`)  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("")  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ddos-koruma'],
  permLevel: 0,
};

exports.help = {
  name: 'ddos-koruma',
  description: '',
  usage: ''
};