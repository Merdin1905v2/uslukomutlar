const Discord = require('discord.js');
const db = require('quick.db') 
const proxie = require('../config.json');
exports.run = (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) if(message.author.id !== "768059323951087636") return message.channel.send('Bu Özelliği Kullanabilmek İçin `Yönetici` Yetkisine Sahip Olmalısın')
    
    let mesaj = args.slice(0).join(' ')
    
if (!mesaj) {
  if(!db.fetch(`judgekanal_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed()
   .setColor(`#66c4a6`)
   .setAuthor(`Uslu Otorol Sistemi`, client.user.avatarURL())
   .setDescription(
       `\`\`\`diff
+ Zaten Otorol Kapalı\`\`\``
   )
   .setImage(``)
   .setFooter(`Uslu Otorol Sistemi`, client.user.avatarURL())
   );
}
   const otorolkapat = new Discord.MessageEmbed()
   .setColor(`#66c4a6`)
   .setAuthor(`Uslu Otorol Sistemi`, client.user.avatarURL())
   .setDescription(
       `\`\`\`diff
+ Otorol Kapatmak İçin Örnek: u!otorol-kapat\`\`\``
   )
   .setImage(`https://cdn.discordapp.com/attachments/819599917710049310/822785574410649630/Ekran_Goruntusu_308.png`)
   .setFooter(`Uslu Otorol Sistemi`, client.user.avatarURL())
message.channel.send(otorolkapat)
    
   message.react('✔')
db.delete(`judgekanal_${message.guild.id}`)   
  db.delete(`judgerol_${message.guild.id}`)
db.delete(`judgemesaj_${message.guild.id}`)

}; 

exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'otorol-kapat', 
description: 'taslak',
 usage: 'otorolkapat' 
};