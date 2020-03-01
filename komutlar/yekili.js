const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('681938616611897365') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#00ff1f')
        .setTitle(`<a:te:681510124178767892>${client.user.username} - Yetkili - Komutlar<a:te2:681510124568707084>`)
        .setDescription(`<a:di:681084642371305582>**${ayarlar.prefix}sil <sayı>** Sohbeti Temizleyebilirsin\n <a:di:681084642371305582>**${ayarlar.prefix}sa-as <aç-kapat>**  Biri Sa Yazınca as Yazar.\n<a:di:681084642371305582>**${ayarlar.prefix}sayaç <sayı> <#kanal>** Sayaç Ayarlar.\n<a:di:681084642371305582>**${ayarlar.prefix}sayaç sıfırla** Sayaç ı Sıfırlar\n<a:di:681084642371305582>**${ayarlar.prefix}otorol @röl> <#kanal>** Sunucuya Giren Kişilere Rol Verir.\n<a:di:681084642371305582>**${ayarlar.prefix}kapatotorol** Otorol ü Kapatır\n` + `<a:di:681084642371305582>**${ayarlar.prefix}oylama**  Oylama Başlatırsın\n<a:di:681084642371305582>**${ayarlar.prefix}oylama-kanal #kanal**  Oylama Kanalı Ayarlarsın\n<a:di:681084642371305582>**${ayarlar.prefix}link-engel <aç-kapat>** Bakım:outbox_tray: \n<a:di:681084642371305582>**${ayarlar.prefix}capslock-engel <aç-kapat>** Büyük Harfe Yzmayı Engeller.<a:di:681084642371305582>**${ayarlar.prefix}sunucu-kur** Düzgün Bir Sunucu Kurar\n` + `<a:di:681084642371305582>**${ayarlar.prefix}reklamtaraması**  Sunucudaki Tüm Herkezi Tarar\n` + `<a:di:681084642371305582>**${ayarlar.prefix}sunucupanel** Bakım:outbox_tray: \n ` + `<a:di:681084642371305582>**${ayarlar.prefix}yavaşmod <süre>** Yazma Süresi Ayarlar.\n<a:di:681084642371305582>**${ayarlar.prefix}güvenlik <#kanal>** Bakım:outbox_tray:\n`)  
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