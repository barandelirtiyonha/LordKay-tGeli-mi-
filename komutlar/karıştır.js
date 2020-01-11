const discord = require ('discord.js')

exports.run = async (client, message, args) => {
  const mesaj = args.slice(0).join(' ')
  if (!mesaj) {
    return message.reply('yazı girmeyi unutmayın.')
  }
const api = require('../ek/zalgolize')
const embed = new discord.RichEmbed()
.setColor('RANDOM')
.setDescription(api(args.join(' ')))
 await message.channel.send(embed);
};

exports.conf = {
  aliases: [],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'karıştır',
  description: 'Yazdığınız mesajın şekillerle karıştırılmış halini atar..',
  usage: 'karıştır <yazı>',
  category:"Kullanıcı"
};
