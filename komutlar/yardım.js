const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('672381245115727911') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#00ff1f')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription(`<a:di:681084642371305582>**cr!adamasmaca** Adam asmaca oynarsınız
<a:di:681084642371305582>**cr!ateş-et @etiket** Etiketlediğin kişiye ateş açar
<a:di:681084642371305582>**cr!aşkölçer @etiket** Kişiye olan aşkını ölçer
<a:di:681084642371305582>**cr!balıktut** Şansa balık tutarsınız
<a:di:681084642371305582>**cr!düello @etiket** Kişiye düello atar
<a:di:681084642371305582>**cr!efkarım** Efkarını Ölçer
<a:di:681084642371305582>**cr!emojiler** Sunucudaki emojileri atar
<a:di:681084642371305582>**cr!emojiyazı <yazı>** Emojilerle yazı yazarsınız
<a:di:681084642371305582>**cr!hapishane** Profilinize hapishane efekti ekler
<a:di:681084642371305582>**cr!hesapla <işlem>** Yazdığınız işlemi hesaplar
<a:di:681084642371305582>**cr!kartopu** Kartopu atarsınız
<a:di:681084642371305582>**cr!karıştır <yazı>** Yazdığınız yazıdaki harfleri karıştırır
<a:di:681084642371305582>**cr!pixel** Profilini bulanık yapar
<a:di:681084642371305582>**cr!reklamtaraması** Chati temizler
<a:di:681084642371305582>**cr!rip** Profilinize rip efekti ekler
<a:di:681084642371305582>**cr!saat** Türkiyenin saatini gösterir
<a:di:681084642371305582>**cr!stresçarkı** Stres çarkı çevirir
<a:di:681084642371305582>**cr!bayrak** Profiline TÜRK BAYRAĞI efekti ekler
<a:di:681084642371305582>**cr!wasted** Profiline wasted efekti ekler
<a:di:681084642371305582>**cr!kaçcm** Uzunluk Ölçer :D`)  
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