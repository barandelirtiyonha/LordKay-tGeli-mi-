const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


//-----------------------------------------------\\
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log("EmreHD35 | Hostlandı");
  response.sendStatus(200);
});
app.listen(8000);
setInterval(() => {
  http.get(`http://bosproje.glitch.me/`);
}, 280000)
//-----------------------------------------------\\

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//-----------------------KOMUTLAR-----------------------\\

//-----------------------Otorol-----------------------\\
//-----------------------Otorol-----------------------\\
//-----------------------Otorol-----------------------\\
//-----------------------Otorol-----------------------\\


client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8")); 
  let embed = new Discord.RichEmbed()
    .setTitle('Otorol Sistemi')
    .setDescription(`:loudspeaker: :inbox_tray:  @${member.user.tag}'a Otorol Başarılıyla Verilmiştir. `)
.setColor("GREEN")
    .setFooter("ForumGrand", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`<a:onay:681083728440852500>Hoşgeldin **${member.user.tag}** Rolün Başarılı Bir Şekilde Verildimiştir.<a:onay:681083728440852500>`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});

client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.addRole(role)

});

//-----------------------Otorol Son-----------------------\\
//-----------------------Otorol Son-----------------------\\
//-----------------------Otorol Son-----------------------\\
//-----------------------Otorol Son-----------------------\\

//-----------------------SunucuKur-----------------------\\
//-----------------------SunucuKur-----------------------\\
//-----------------------SunucuKur-----------------------\\
//-----------------------SunucuKur-----------------------\\


client.on("guildMemberAdd", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find("name", skanal9);
  if (!skanal31) return;
  skanal31.send(
   ` \`${
       member.user.tag
    }\` Adlı Kullanıcı Sunucuya Katıldı. \`${sayac}\` Kullanıcı Olmaya \`${sayac -
      member.guild.members.size}\` Kullanıcı Kaldı. <a:onay:681083728440852500> `
  );
});

client.on("guildMemberRemove", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find("name", skanal9);
  if (!skanal31) return;
  skanal31.send(
    ` \`${
      member.user.tag
    }\`Adlı Kullanıcı Sunucudan Ayrıldı. \`${sayac}\` Kullanıcı Olmaya \`${sayac -
      member.guild.members.size}\` Kullanıcı Kaldı <a:aniblobsweat:683240339758120969>`
  );
});


client.on("message", async message => {
  const ms = require("ms");
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
    if (
      message.guild.channels.find(channel => channel.name === "Bot Kullanımı")
    )
      return message.channel.send(" Bot Paneli Zaten Ayarlanmış.");
    message.channel.send(
      `Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **kabul** yazınız.`
    );
    if (!message.member.hasPermission("Yönetici"))
      if (message.author.id !== "466324444391014400")
        return message.channel.send(
          " Bu Kodu `Yapımcım  Olan Kişi Kullanabilir."
        );
    message.channel
      .awaitMessages(response => response.content === "kabul", {
        max: 1,
        time: 10000,
        errors: ["time"]
      })
      .then(collected => {
        message.guild.createChannel("|▬▬|Bot Kanalları|▬▬|", "category", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"]
          }
        ]);

        message.guild
          .createChannel("「✔」kurallar", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("「💚」gelen-giden", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("「👑」sayaç", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("「🔥」log-kanalı", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel("「🎃」duyuru-odası", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Bot Kanalları|▬▬|"
              )
            )
          );
      })
      .then(collected => {
        message.guild.createChannel("|▬▬|Genel Kanallar|▬▬|", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`「🎁」şikayet-ve-öneriler`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`「👥」video-duyurular`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`「📷」galeri-odası`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`「🤖」bot-komut`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`「👻」sohbet-odası`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Genel Kanallar|▬▬|"
              )
            )
          );

        message.guild
          .createChannel(`🌹》Kurucu Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Ses Kanalları|▬▬|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            let role2 = message.guild.roles.find("name", "Kurucu");

            c.overwritePermissions(role, {
              CONNECT: false
            });
            c.overwritePermissions(role2, {
              CONNECT: true
            });
          });

        message.guild.createChannel("|▬▬|Ses Kanalları|▬▬|", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`👍》Sesli Yönetici Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Ses Kanalları|▬▬|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            let role2 = message.guild.roles.find("name", "Kurucu");
            let role3 = message.guild.roles.find("name", "Yönetici");
            c.overwritePermissions(role, {
              CONNECT: false
            });
            c.overwritePermissions(role2, {
              CONNECT: true
            });
            c.overwritePermissions(role3, {
              CONNECT: true
            });
          });

        message.guild
          .createChannel(`💬》Sesli Sohbet Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Ses Kanalları|▬▬|"
              )
            )
          )
          .then(c => {
            let role = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
              CONNECT: true
            });
          });

        message.guild.createChannel("|▬▬|Oyun Odaları|▬▬|", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`🎮》Lol Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》Zula Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》Counter Strike Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》Pubg Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》Fortnite Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》MineCraft Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》RobLox Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );
        message.guild
          .createChannel(`🎮》WolfTeam Odası`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "|▬▬|Oyun Odaları|▬▬|"
              )
            )
          );

        message.channel.send("Gerekli Herşey Kuruldu İyi Eğelenceler!");
      });
  }
});

//-----------------------SunucuKur Son-----------------------\\
//-----------------------SunucuKur Son-----------------------\\
//-----------------------SunucuKur Son-----------------------\\
//-----------------------SunucuKur Son-----------------------\\

//-----------------------Sa-As-----------------------\\
//-----------------------Sa-As-----------------------\\
//-----------------------Sa-As-----------------------\\
//-----------------------Sa-As-----------------------\\

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('Aleyküm Selam Hoşgeldin');    
      }
      }
    });

//-----------------------Sa-As Son-----------------------\\
//-----------------------Sa-As Son-----------------------\\
//-----------------------Sa-As Son-----------------------\\
//-----------------------Sa-As Son-----------------------\\

//-----------------------Güvenlik-----------------------\\
//-----------------------Güvenlik-----------------------\\
//-----------------------Güvenlik-----------------------\\
//-----------------------Güvenlik-----------------------\\

client.on("guildMemberAdd", async member => {
  let user = client.users.get(member.id);
  let kanal = client.channels.get(db.fetch(`guvenlik${member.guild.id}`));
  const Canvas = require("canvas");
  const canvas = Canvas.createCanvas(360, 100);
  const ctx = canvas.getContext("2d");

  const resim1 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/597433546868654106/627428441695977497/gvnlk-spheli.png"
  );
  const resim2 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/597433546868654106/627427731407241226/gvnlk-gvnli.png"
  );
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment(kurulus).format("dddd");
  var kontrol;
  if (kurulus > 2629800000) kontrol = resim2;
  if (kurulus < 2629800000) kontrol = resim1;

  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/682590636523913238/684432336070115537/gvnlk-arka.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol, 0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
  ctx.clip();
  ctx.drawImage(avatar, 143, 10, 73, 72);

  const attachment = new Discord.Attachment(canvas.toBuffer(), "güvenlik.png");
  kanal.send(attachment);
});

//-----------------------Güvenlik Son-----------------------\\
//-----------------------Güvenlik Son-----------------------\\
//-----------------------Güvenlik Son-----------------------\\
//-----------------------Güvenlik Son-----------------------\\

//-----------------------Büyük Harf-----------------------\\
//-----------------------Büyük Harf-----------------------\\
//-----------------------Büyük Harf-----------------------\\
//-----------------------Büyük Harf-----------------------\\

    client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return; 
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`${msg.author}, Bu sunucuda, büyük harf kullanımı engellenmekte<a:yak:681126681582501900>`).then(m => m.delete(5000))
     }
       }
     }
   }
  }
});

//-----------------------Büyük Harf Son-----------------------\\
//-----------------------Büyük Harf Son-----------------------\\
//-----------------------Büyük Harf Son-----------------------\\
//-----------------------Büyük Harf Son-----------------------\\

//-----------------------Eklendim-Atıldım-----------------------\\
//-----------------------Eklendim-Atıldım-----------------------\\
//-----------------------Eklendim-Atıldım-----------------------\\
//-----------------------Eklendim-Atıldım-----------------------\\

//Bot Eklenme Mesaj Kodu
client.on('guildCreate', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("GREEN")
.setTitle(`${guild.name} Sunucusuna Katıldım! :inbox_tray:`)
.addField('Katıldığım Sunucunun Sahibi', ` \`\`\`${guild.owner.user.username}\`\`\` `)
.addField('Sunucudaki Kişi Sayısı', ` \`\`\`${guild.memberCount}\`\`\` `)
.setThumbnail(`${guild.iconURL} `)

   client.channels.get('685776379718926396').send(rrrsembed);
 });

//Bot Atılma Mesaj Kodu
client.on('guildDelete', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("RED")
.setTitle(`${guild.name} Sunucusundan Atıldım! :outbox_tray:`)
.addField('Atıldığım Sunucunun Sahibi', ` \`\`\`${guild.owner.user.username}\`\`\` `)
.addField('Sunucudaki Kişi Sayısı', ` \`\`\`${guild.memberCount}\`\`\` `)
.setThumbnail(`${guild.iconURL} `)

   client.channels.get('685776379718926396').send(rrrsembed);
 
});

//-----------------------Eklendim-Atıldım Son-----------------------\\
//-----------------------Eklendim-Atıldım Son-----------------------\\
//-----------------------Eklendim-Atıldım Son-----------------------\\
//-----------------------Eklendim-Atıldım Son-----------------------\\

//-----------------------Küfür Engel Link Engel-----------------------\\
//-----------------------Küfür Engel Link Engel-----------------------\\
//-----------------------Küfür Engel Link Engel-----------------------\\
//-----------------------Küfür Engel Link Engel-----------------------\\

client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
        
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`) 
          if (i == 'acik') {
              const reklam = ["discord.app", "discord.gg", "invite","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                   
                    let embed = new Discord.RichEmbed()
                    .setColor(0xffa300)
                    .setFooter('CraftingRoyal BOT  -|-  Reklam engellendi.', client.user.avatarURL)
                    .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)
                    .setDescription("CraftingRoyal BOT Reklam sistemi, " + `***${msg.guild.name}***` + " adlı sunucunuzda reklam yakaladım.")
                    .addField('Reklamı yapan kişi', 'Kullanıcı: '+ msg.author.tag +'\nID: '+ msg.author.id, true)
                    .addField('Engellenen mesaj', msg.content, true)
                    .setTimestamp()                   
                    msg.guild.owner.user.send(embed)                       
                    return msg.channel.send(`${msg.author.tag}, Reklam Yapmak Yasak Bunu Biliyorsun<a:yak:681126681582501900>`).then(msg => msg.delete(25000));
                  }             
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
  });

client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
        
    let i = await db.fetch(`küfürFiltre_${msg.guild.id}`) 
          if (i == 'acik') {
              const küfür = ["amk", "amq", "orospu", "piç", "pıç", "göt", "got", "sg", "aq", "AMK", "AMQ", "OROSPU", "PİÇ",];
              if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                   
                    let embed = new Discord.RichEmbed()
                    .setColor(0xffa300)
                    .setFooter('CraftingRoyal BOT  -|-  Küfür Engel.', client.user.avatarURL)
                    .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)
                    .setDescription("CraftingRoyal BOT Küfür sistemi, " + `***${msg.guild.name}***` + " adlı sunucunuzda reklam yakaladım.")
                    .addField('Reklamı yapan kişi', 'Kullanıcı: '+ msg.author.tag +'\nID: '+ msg.author.id, true)
                    .addField('Engellenen mesaj', msg.content, true)
                    .setTimestamp()                   
                    msg.guild.owner.user.send(embed)            
                    return msg.channel.send(`${msg.author.tag}, Küfür Etmek Yasak Bunu Biliyorsun<a:yak:681126681582501900>`).then(msg => msg.delete(25000));
                  }             
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
  });

//-----------------------Küfür Engel Link Engel Son-----------------------\\
//-----------------------Küfür Engel Link Engel Son-----------------------\\
//-----------------------Küfür Engel Link Engel Son-----------------------\\
//-----------------------Küfür Engel Link Engel Son-----------------------\\
