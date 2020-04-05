const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('681938616611897365') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Yetkili - Komutlar`)
        .setDescription(`**${ayarlar.prefix}sil <sayı>** Sohbeti Temizleyebilirsin.\n**${ayarlar.prefix}sa-as <aç-kapat>**  Biri Sa Yazınca as Yazar.\n**${ayarlar.prefix}sayaç <sayı> <#kanal>** Sayaç Ayarlar.\n**${ayarlar.prefix}sayaç sıfırla** Sayaçı Sıfırlar.\n**${ayarlar.prefix}otorol @rol> <#kanal>** Sunucuya Giren Kişilere Rol Verir.\n**${ayarlar.prefix}kapatotorol** Otorolü Kapatır.\n` + `**${ayarlar.prefix}oylama**  Oylama Başlatırsın.\n**${ayarlar.prefix}oylama-kanal #kanal**  Oylama Kanalı Ayarlarsın.\n**${ayarlar.prefix}link-engel <aç-kapat>** Üyelerin Link Atmasını Engeller.\n**${ayarlar.prefix}küfür-engel <aç-kapat>** Üyelerin Küfür Etmesini Engeller.\n**${ayarlar.prefix}capslock-engel <aç-kapat>** Büyük Harfle Yazmayı Engeller.\n**${ayarlar.prefix}sunucu-kur** Düzgün Bir Sunucu Kurar.\n` + `**${ayarlar.prefix}reklamtaraması**  Sunucudaki Tüm Herkezi Tarar.\n` + `**${ayarlar.prefix}sunucupanel** Bakım:outbox_tray: \n ` + `**${ayarlar.prefix}yavaşmod <süre>** Yazma Süresi Ayarlar.\n**${ayarlar.prefix}güvenlik <#kanal>** Sunucunuza Gelenleri Tarar.\n**${ayarlar.prefix}kayıt** Kayıt Sistemini Gösterir.\n**${ayarlar.prefix}davet-takip** Davet Takipleri Gösterir.\n**${ayarlar.prefix}oto-tag** Oto Tag Sistemini Gösterir, Kapatmak İçin Oto-tag-sıfırla !\n**${ayarlar.prefix}değişiklikler** Bota Eklenen Yeni Değişiklikleri Gösterir!`)  
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