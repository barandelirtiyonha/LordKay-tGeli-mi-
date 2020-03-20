const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('#ff0000')
  .setFooter('CraftingRoyal  \'Buyur benim istatistiklerim', bot.user.avatarURL)
  .addField("» **<a:di:681084642371305582> Botun Sahibi <a:di:681084642371305582>**", "EmreHD35 {15}#5726")
  .addField("»  **<a:di:681084642371305582> Geliştirici <a:di:681084642371305582>** ","EmreHD35 {15}#5726")
  .addField("» **<a:di:681084642371305582> Bellek kullanımı <a:di:681084642371305582>**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **<a:di:681084642371305582> Çalışma süresi <a:di:681084642371305582>**", seksizaman)
  .addField("» **<a:di:681084642371305582> Kullanıcılar <a:di:681084642371305582>**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **<a:di:681084642371305582> Sunucular <a:di:681084642371305582>**", bot.guilds.size.toLocaleString(), true)
  .addField("» **<a:di:681084642371305582> Kanallar <a:di:681084642371305582>**", bot.channels.size.toLocaleString(), true)
  .addField("» **<a:di:681084642371305582> Discord.JS sürüm <a:di:681084642371305582>**", "v"+Discord.version, true)
  .addField("» **<a:di:681084642371305582> Node.JS sürüm <a:di:681084642371305582>**", `${process.version}`, true)
  .addField("» **<a:di:681084642371305582> Ping <a:di:681084642371305582>**", bot.ping+" ms", true)
  .addField("» **<a:di:681084642371305582> Bit <a:di:681084642371305582>**", `\`${os.arch()}\``, true)
  .addField("» **<a:di:681084642371305582> İşletim Sistemi <a:di:681084642371305582>**", `\`\`${os.platform()}\`\``) 
  .addField("» **<a:di:681084642371305582> CPU <a:di:681084642371305582>**", `\`\`\`Intel® Core™ i7-10510U Processor (8M Cache, Up to 4.80 GHz)\`\`\``)
  .addField("**»<a:di:681084642371305582> Bot Davet <a:di:681084642371305582>**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=681938616611897365&scope=bot&permissions=2146958847)", )
  .addField("**»<a:di:681084642371305582> Destek Sunucusu <a:di:681084642371305582>**", " [Sunucumuza Katıl](https://discord.gg/SupP7w6)", )
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};