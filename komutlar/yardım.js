const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('681938616611897365') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#00ff1f')
        .setTitle(`<a:te:681510124178767892>${client.user.username} - Komutlar<a:te2:681510124568707084>`)
        .setDescription(`<a:di:681084642371305582>**${ayarlar.prefix}yetkili** Yetkili Komutları.\n <a:di:681084642371305582>**${ayarlar.prefix}kullanıcı** Kullanıcıya Komutları.\n ` + `<a:di:681084642371305582>**${ayarlar.prefix}eğlence** Eğlence Komutlarını Gösterir.\n` + `<a:di:681084642371305582>**${ayarlar.prefix}müzik** Müzik Komutlarını Gösterir.\n <a:di:681084642371305582>**${ayarlar.prefix}bot** Bot Komutlarını Gösterir.\n <a:8299_Loading1:608249368386207751>**${ayarlar.prefix}vip** Bakım :outbox_tray:\n`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `
[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=681938616611897365&scope=bot&permissions=2146958847)
[Destek Sunucusu](https://discord.gg/SupP7w6)`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("")  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yar','help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};