const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  msg.channel.sendCode("asciidoc", `=YARDIM MENÜSÜ=
• {prefix}adamasmaca :: Adam asmaca oynarsınız
• {prefix}ateş-et @etiket :: Etiketlediğin kişiye ateş açar
• {prefix}avatar :: Profil resmini atar
• {prefix}aşkölçer @etiket :: Kişiye olan aşkını ölçer
• {prefix}balıktut :: Şansa balık tutarsınız
• {prefix}ban @etiket :: Kullanıcıya ban atarsınız
• {prefix}düello @etiket :: Kişiye düello atar
• {prefix}efkarım :: Efkarını Ölçer
• {prefix}emojiler :: Sunucudaki emojileri atar
• {prefix}emojiyazı <yazı> :: Emojilerle yazı yazarsınız
• {prefix}fakemesaj @etiket <yazı> :: Etiketlediğin kişinin adına mesaj atar
• {prefix}hapishane :: Profilinize hapishane efekti ekler
• {prefix}hesapla <işlem> :: Yazdığınız işlemi hesaplar
• {prefix}kartopu :: Kartopu atarsınız
• {prefix}karıştır <yazı> :: Yazdığınız yazıdaki harfleri karıştırır
• {prefix}kick @etiket :: Kişiyi sunucudan atar
• {prefix}ping :: Botunun pingini gösterir
• {prefix}pixel :: Profilini bulanık yapar
• {prefix}reklamtaraması :: Chati temizler
• {prefix}rip :: Profilinize rip efekti ekler
• {prefix}saat :: Türkiyenin saatini gösterir
• {prefix}servericon :: Sunucunun profil resmini gösterir
• {prefix}slowmode 1-10 :: Sohbete yavaşlık ekler
• {prefix}stresçarkı :: Stres çarkı çevirir
• {prefix}bayrak :: Profiline TÜRK BAYRAĞI efekti ekler
• {prefix}wasted :: Profiline wasted efekti ekler`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım', 'youtube', 'yardım menüsü', 'help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};