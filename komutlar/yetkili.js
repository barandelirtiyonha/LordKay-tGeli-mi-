const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('681938616611897365') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#00ff1f')
        .setTitle(`${client.user.username} - Yetkili - Komutlar`)
        .setDescription(`**${ayarlar.prefix}sil <sayı>** Sohbeti Temizleyebilirsin.\n **${ayarlar.prefix}sa-as <aç-kapat>**  Biri Sa Yazınca as Yazar.\n**${ayarlar.prefix}sayaç <sayı> <#kanal>** Sayaç Ayarlar.\n**${ayarlar.prefix}sayaç sıfırla** Sayaç ı Sıfırlar.\n**${ayarlar.prefix}otorol @rol> <#kanal>** Sunucuya Giren Kişilere Rol Verir.\n**${ayarlar.prefix}kapatotorol** Otorolü Kapatır.\n` + `**${ayarlar.prefix}oylama**  Oylama Başlatırsın.\n**${ayarlar.prefix}oylama-kanal #kanal**  Oylama Kanalı Ayarlarsın.\n**${ayarlar.prefix}link-engel <aç-kapat>** Üylerin Link Atmasını Engeller.\n**${ayarlar.prefix}küfür-engel <aç-kapat>** Üylerin Küfür Etmesini Engeller.\n**${ayarlar.prefix}capslock-engel <aç-kapat>** Büyük Harfle Yzmayı Engeller.\n**${ayarlar.prefix}sunucu-kur** Düzgün Bir Sunucu Kurar.\n` + `**${ayarlar.prefix}reklamtaraması**  Sunucudaki Tüm Herkezi Tarar.\n` + `**${ayarlar.prefix}sunucupanel** Bakım:outbox_tray: \n ` + `**${ayarlar.prefix}yavaşmod <süre>** Yazma Süresi Ayarlar.\n**${ayarlar.prefix}güvenlik <#kanal>** Sunucunuza Gelenleri Tarar.\n `)  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("")  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yet','authorized'],
  permLevel: 0,
};

exports.help = {
  name: 'yetkili',
  description: '',
  usage: ''
};