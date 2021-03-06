const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  let x = args[0]

  let user = message.mentions.users.first() || message.author;
  let boksE = await db.fetch(`boksE_${message.author.id}`);
  let kalem = await db.fetch(`kalem_${message.author.id}`);
  let kapışC = await db.fetch(`kapışC_${message.author.id}`);
  let rozet = await db.fetch(`rozet_${message.author.id}`);
  let para = await db.fetch(`paracık_${message.author.id}`);
  let elmas = await db.fetch(`elmascıklar_${message.author.id}`);
  let altın = await db.fetch(`altıncıklar_${message.author.id}`);

  //ROZET 
  let rozetA = await db.fetch(`elmascıklar_${message.author.id}`);
  let RozetS = -50;
  let rozetF = 50;
    
    
  try {
    
    if (!x) {
 
const e = new Discord.MessageEmbed()
.setColor('#66c4a6')
.setDescription(`Rozet: **50 ELMAS** (Satın Almak İçin: **u!market rozet**)\n:pen_ballpoint: Kalem: **250 Para** (Satın Almak İçin: **u!market kalem**)`)
message.channel.send(e)
      return
    }
    
    if (x === 'rozet') {

      if (rozet > 1) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`${client.emojis.cache.get(client.emojiler.hayır)}Zaten sende rozet bulunuyor fazlasını ne yapacaksın?`)
    .setColor('#66c4a6')
      .setTimestamp()
      message.channel.send({embed})
    
    
  } else if (rozetA < rozetF) {
        message.channel.send(`${client.emojis.cache.get(client.emojiler.hayır)} Rozet satın almak için yeterli elmasın bulunmuyor. \n Gerekli olan elmas: **${rozetF} ELMAS**.`)
    } else if  (rozetA > rozetF) {
message.channel.send(`${client.emojis.cache.get(client.emojiler.paraROZET)} Rozet başarıyla aldınız!`)
db.set(`memberBadge6_${message.author.id}`, "https://cdn.discordapp.com/attachments/531535859594297364/533260601162465280/paraR.png")
db.add(`rozet_${message.author.id}`, 2)
db.add(`elmascıklar_${message.member.id}`, -50)
    
} else if  (rozetA = rozetF) {
  message.channel.send(`${client.emojis.cache.get(client.emojiler.paraROZET)} Rozet başarıyla aldınız!`)
  db.set(`memberBadge6_${message.author.id}`, "https://cdn.discordapp.com/attachments/531535859594297364/533260601162465280/paraR.png")
  db.add(`rozet_${message.author.id}`, 2)
  db.add(`elmascıklar_${message.member.id}`, -50)
      }
      return
    }

    if (x === 'kalem') {

      if (kalem > 0) {
      const embed = new Discord.MessageEmbed()
      .setDescription(`${client.emojis.cache.get(client.emojiler.hayır)} Zaten sende kalem bulunuyor fazlasını ne yapacaksın?`)
      .setColor('#66c4a6')
      .setTimestamp()
      message.channel.send({embed})
    
    
  } else if (para < 200) {
        message.channel.send(`${client.emojis.cache.get(client.emojiler.hayır)} Kalem satın almak için yeterli paran bulunmuyor. \n Gerekli olan para: **250 Para**.`)
    } else if  (para > 200) {
message.channel.send(`${client.emojis.cache.get(client.emojiler.evet)} Kalem başarıyla aldınız!`)
db.add(`kalem_${message.author.id}`, 2)
db.add(`paracık_${message.member.id}`, -200)

  } else if  (para = 200) {
    message.channel.send(`${client.emojis.cache.get(client.emojiler.evet)} Kalem başarıyla aldınız!`)
    db.add(`kalem_${message.author.id}`, 2)
    db.add(`paracık_${message.member.id}`, -200)
        }
      return
    }
      
    } catch(err) {
      
    }

    
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["market"],
  permLevel: 0,
  kategori: "profil"
};

exports.help = {
  name: 'market',
  description: 'eşya satın alabilirsiniz gösterir.',
  usage: 'market'
};