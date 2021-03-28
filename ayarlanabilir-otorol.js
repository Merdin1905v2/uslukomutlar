const Discord = require('discord.js');
const db = require('quick.db') 
const proxie = require('../config.json');
exports.run = (client, message, args) => {

if(!message.member.permissions.has("ADMINISTRATOR")) if(message.author.id !== "768059323951087636") return message.channel.send('Bu Özelliği Kullanabilmek İçin `Yönetici` Yetkisine Sahip Olmalısın')
    
let uslu = "Uslu"
let kanal = message.mentions.channels.first()
let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(new Discord.MessageEmbed()
    .setColor(`#66c4a6`)
    .setThumbnail(client.user.avatarURL())
    .setAuthor(`Uslu Otorok Sistemi`, client.user.avatarURL())
    .setDescription(
     `\`\`\`diff
+ Bir Rol Etiketle\`\`\``
    )
    .setImage(`https://cdn.discordapp.com/attachments/816247170437087293/822004573560242196/Ekran_Goruntusu_285.png`)
    .setFooter(`Uslu Otorol Sistemi`, client.user.avatarURL())
              );
if(!kanal) return message.channel.send(new Discord.MessageEmbed()
    .setColor(`#66c4a6`)
    .setThumbnail(client.user.avatarURL())
    .setAuthor(`Uslu Otorok Sistemi`, client.user.avatarURL())
    .setDescription(
      `\`\`\`fix
+ Bir Kanal Etiketle\`\`\``
    )
    .setImage(`https://cdn.discordapp.com/attachments/816247170437087293/822004573560242196/Ekran_Goruntusu_285.png`)
    .setFooter(`Uslu Otorol Sistemi`, client.user.avatarURL())
       );

   
message.channel.send(new Discord.MessageEmbed()
                    .setColor(`#66c4a6`)
                    .setThumbnail(client.user.avatarURL())
                    .setAuthor(`Uslu Otorol Sistemi`, client.user.avatarURL())
                    .setDescription(
    `\`\`\`diff
Otorol aktif edildi\`\`\`
\`\`\`fix
Kullanıcılara Verilecek Rol\`\`\`  ${rol} \`\`\`fix
Olarak Ayarladım Kayıt Kanalını İse\`\`\`  ${kanal} \`\`\`fix
Olarak Ayarladım\`\`\`
\`\`\`diff
${uslu} Rolünü Üstte Bulunması Gerekmektedir Yoksa Otorol Verilmez\`\`\``
)
                    .setFooter(`Uslu Otorol Sistemi`, client.user.avatarURL())
                    );
   
db.set(`judgekanal_${message.guild.id}`, kanal.id)   
  db.set(`judgerol_${message.guild.id}` , rol.id)
 };

exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: ['otorol'], 
permLevel: 0
}

exports.help = {
 name: 'otorol', 
description: 'taslak',
 usage: 'oto-rol' 
};
