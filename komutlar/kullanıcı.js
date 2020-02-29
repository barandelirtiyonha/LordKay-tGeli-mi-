const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('672381245115727911') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`<a:te:681510124178767892>${client.user.username} - Kullanıcı - Komutlar<a:te2:681510124568707084>`)
        .setDescription(`<a:di:681084642371305582>**${ayarlar.prefix}avatar @kulanıcı** Avatarını Gösterir\n ` + `<a:di:681084642371305582>**${ayarlar.prefix}sunucubilgi**  Sunucunun bilgilerini gönderir.\n` + `<a:di:681084642371305582>**${ayarlar.prefix}ping**  Bot pingini gösterir.\n` + `<a:di:681084642371305582>**${ayarlar.prefix}istatistik** Botun istatistik gösterir.\n` + `<a:di:681084642371305582>**${ayarlar.prefix}bilgi** Bot Bilgi Gösterir.\n` + `<a:di:681084642371305582>**${ayarlar.prefix}havadurumu** Botun istatistik gösterir.\n` + `<a:di:681084642371305582>**${ayarlar.prefix}top5** Botun En İyi Sunucularını Gösterir (Yeni!)\n` + `<a:di:681084642371305582>**${ayarlar.prefix}yasaklar** Sunucudan Banlananları Göstetir\n` + `<a:di:681084642371305582>**${ayarlar.prefix}kullanıcı-bilgi** Kulanıcı Bilgilerini Gösterir.` + `
<a:di:681084642371305582>**${ayarlar.prefix}üyedurum** Üyelerin Durumunu Gösterir.`)  
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