const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async (bot, message,args) => {
  
  
    if (!message.member.hasPermission("ADMINISTRATOR")) if(message.author.id !== "768059323951087636") return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
    
let logk = message.mentions.channels.first();  
  
let logkanal = await db.fetch(`guvenlik${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {   
    if(!logkanal) return message.channel.send(` Güvenliği kapatmak için \`güvenlik kanalının\` seçili olması lazım örnek kullanım: \`u!güvenlik #kanal\``);
    
   db.delete(`guvenlik${message.guild.id}`)  
    
   message.channel.send(`Güvenlik başarıyla kapatıldı.`);   
    
  
    return
  }  
  
if (!logk) return message.channel.send(new Discord.MessageEmbed() 
    .setColor(`#66c4a6`)
    .setThumbnail(bot.user.avatarURL())
    .setAuthor(`Uslu Güvenlik Sistemi`, bot.user.avatarURL())
    .setDescription(
     `\`\`\`diff
+ Bir Kanal Eitketle\`\`\``
    )
    .setImage(`https://cdn.discordapp.com/attachments/822371998863851571/822731526018039818/Ekran_Goruntusu_291.png`)
    .setFooter(`Uslu Güvenlik Sistemi`, bot.user.avatarURL()));  
 

   db.set(`guvenlik${message.guild.id}`, logk.id)

message.channel.send(new Discord.MessageEmbed() 
    .setColor(`#66c4a6`)
    .setThumbnail(bot.user.avatarURL())
    .setAuthor(`Uslu Güvenlik Sistemi`, bot.user.avatarURL())
    .setDescription(
     `\`\`\`diff
Güvenlik başarıyla\`\`\` ${logk} \`\`\`diff
olarak ayarlandı\`\`\``
    )
    .setImage(`https://cdn.discordapp.com/attachments/822371998863851571/822731526018039818/Ekran_Goruntusu_291.png`)
    .setFooter(`Uslu Güvenlik Sistemi`, bot.user.avatarURL()));  

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['resimligks','resimligüvenlik', 'güvenlik'],
  permLevel: 4
};

module.exports.help = {
  name: 'rgüvenlik',
  description: 'güvenlik sağlar',
  usage: 'güvenlik'
};
   