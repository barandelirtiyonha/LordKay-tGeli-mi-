const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

const moment = require('moment');
exports.run = (bot, message, params) => {
  
  
     var konum = 'Konumlar'
        if(message.guild.region === "russia") {
            var konum = 'Rusya'
        }
        if(message.guild.region === "us-west") {
            var konum = 'Batı Amerika'
        }
        if(message.guild.region === "us-south") {
            var konum = 'Güney Amerika'
        }
        if(message.guild.region === "us-east") {
            var konum = 'Doğu Amerika'
        }
        if(message.guild.region === "us-central") {
            var konum = 'Amerika'
        }
        if(message.guild.region === "brazil") {
            var konum = 'Brezilya'
        }
        if(message.guild.region === "singapore") {
            var konum = 'Singapur'
        }
        if(message.guild.region === "sydney") {
            var konum = 'Sidney'
        }
        if(message.guild.region === "eu-west") {
            var konum = 'Batı Avrupa'
        }
        if(message.guild.region === "eu-south") {
            var konum = 'Güney Avrupa'
        }
        if(message.guild.region === "eu-east") {
            var konum = 'Doğu Avrupa'
        }
        if(message.guild.region === "eu-central") {
            var konum = 'Orta Avrupa'
        }
        if(message.guild.region === "hongkong") {
            var konum = 'Hong Kong'
        }
        if(message.guild.region === "japan") {
            var konum = 'Japonya'
        }
  
  
    var tarih = 'Tarihler'
        if(moment(message.guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/01/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/02/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/03/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/04/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/05/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/06/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/07/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/08/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/09/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/10/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/11/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/12/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }  
  
  
   const embed = new Discord.RichEmbed()
   .setColor("0x36393E")
   .setAuthor(`Valpro - Sunucu Bilgi`, message.guild.iconURL)
   .setThumbnail(message.guild.iconURL)
   
  .addField(`:white_small_square: Sunucu Kurucusu`, message.guild.owner, true)
  .addField(':white_small_square: İsim Kısaltması:', message.guild.nameAcronym, true)
  .addField(`:white_small_square: Doğrulama Seviyesi:`, `[${message.guild.verificationLevel}]`,true)
  .addField(`:white_small_square: Sunucu Bölgesi`, konum, true)
  .addField(`:white_small_square: Oluşturulma Tarihi`, tarih, true)
  .addField(`:white_small_square: Sunucu ID`,message.guild.id, true)
  .setDescription(`:white_small_square: Roller: [${message.guild.roles.size}] \n+roller yazıp bakabilirsin.` )
  .addField(`:white_small_square: Kullanıcılar [${message.guild.memberCount}]`, `${message.guild.members.filter(m => m.user.presence.status === "online").size}  <:online:617938661484265472> | ${message.guild.members.filter(m => m.user.presence.status === "idle").size} <a:bosta:640608440863031300> | ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} <a:ra:629010856549679125> | ${message.guild.members.filter(m => m.user.presence.status === "offline").size} <a:ofladim:629010726865862667> | ${message.guild.members.filter(m => m.user.bot).size} <:emoji_10:623917492758118400> `, true)
  .addField(`:white_small_square: Kanallar: [${message.guild.channels.size}]`, `${message.guild.channels.filter(c => c.type === "text").size} Yazı | ${message.guild.channels.filter(c => c.type === "voice").size} Ses | ${message.guild.channels.filter(c => c.type === "category").size} Kategori`,true)
  
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
   .setTimestamp() 
   message.channel.send({embed});

 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['sunucu','sb'],
   permLevel: 0
 };

 exports.help = {
   name: 'sunucubilgi',
   category: 'Kullanıcı',
   description: 'Kullanılan Yerdeki Sunucu Bilgilerini Gösterir.',
   usage: 'sunucubilgi'
 };