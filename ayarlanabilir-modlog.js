const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) if(message.author.id !== "768059323951087636") return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        const modlog = new Discord.MessageEmbed()
    .setColor(`#66c4a6`)
    .setThumbnail(client.user.avatarURL())
    .setAuthor(`Uslu Mod-Log Sistemi`, client.user.avatarURL())
    .setDescription(
     `\`\`\`fix
+ Bir Kanal Etiketle\`\`\``
    )
    .setImage(``)
    .setFooter(`Uslu Mod-Log Sistemi`, client.user.avatarURL())
message.channel.send(modlog)
let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`Modlog Kanalı Zaten ayarlı değil.`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`ModLog Kanalı başarıyla sıfırlandı.`);
    return
  }
  //Darkcode
if (!logk) return message.react(`✔`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.`);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog','log-ayarlama','logayarla','log','vkanal','kayıtkanalı','d']
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};