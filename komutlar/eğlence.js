const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('672381245115727911') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#00ff1f')
        .setTitle(`${client.user.username} - Eğlence - Komutlar`)
        .setDescription(`**${ayarlar.prefix}adamasmaca** Adam asmaca oynarsınız
**${ayarlar.prefix}ateş-et @etiket** Etiketlediğin kişiye ateş açar
**${ayarlar.prefix}aşkölçer @etiket** Kişiye olan aşkını ölçer
**${ayarlar.prefix}balıktut** Şansa balık tutarsınız
**${ayarlar.prefix}düello @etiket** Kişiye düello atar
**${ayarlar.prefix}efkarım** Efkarını Ölçer
**${ayarlar.prefix}emojiler** Sunucudaki emojileri atar
**${ayarlar.prefix}emojiyazı <yazı>** Emojilerle yazı yazarsınız
**${ayarlar.prefix}hapishane** Profilinize hapishane efekti ekler
**${ayarlar.prefix}hesapla <işlem>** Yazdığınız işlemi hesaplar
**${ayarlar.prefix}kartopu** Kartopu atarsınız
**${ayarlar.prefix}karıştır <yazı>** Yazdığınız yazıdaki harfleri karıştırır
**${ayarlar.prefix}pixel** Profilini bulanık yapar
**${ayarlar.prefix}reklamtaraması** Chati temizler
**${ayarlar.prefix}saat** Türkiyenin saatini gösterir
**${ayarlar.prefix}stresçarkı** Stres çarkı çevirir
**${ayarlar.prefix}bayrak** Profiline TÜRK BAYRAĞI efekti ekler
**${ayarlar.prefix}wasted** Profiline wasted efekti ekler
**${ayarlar.prefix}kaçcm** Uzunluk Ölçer :D`)  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("")  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlen','eglence'],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence',
  description: '',
  usage: ''
};