const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('681938616611897365') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Kullanıcı - Komutlar`)
        .setDescription(`**${ayarlar.prefix}avatar @kulanıcı** Avatarını Gösterir\n ` + `**${ayarlar.prefix}sunucubilgi**  Sunucunun bilgilerini gönderir.\n` + `**${ayarlar.prefix}ping**  Bot pingini gösterir.\n` + `**${ayarlar.prefix}havadurumu** Hava Durumunu Gösterir.\n` + `**${ayarlar.prefix}top5** Botun En İyi Sunucularını Gösterir (Yeni!)\n` + `**${ayarlar.prefix}yasaklar** Sunucudan Banlananları Göstetir\n`+`**${ayarlar.prefix}üyedurum** Üyelerin Durumunu Gösterir\n`+`**${ayarlar.prefix}kayıt** Kayıt Sistemini Gösterir\n`)  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['user'],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: '',
  usage: ''
};