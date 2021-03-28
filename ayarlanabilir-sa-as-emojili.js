const Discord = require('discord.js')
const db = require('quick.db')
const config = require('../config.json')
 
exports.run = async(client, message, args) => {

let prefix = config.prefix
  
  
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setColor(`#66c4a6`)
    .setAuthor(`Uslu Sa-As Sistemi`, client.user.avatarURL())
    .setDescription(
        `\`\`\`fix
+ Sa As Ayarlamak İçin Örnek: ${prefix}sa-as aç/kapat\`\`\``)
    .setTimestamp()
    .setFooter(`Uslu Sa-As Sistemi`, client.user.avatarURL())
    return message.channel.send(sa)
  }
  if (args[0] === 'aç') {
    
    db.set(`saasemojılı_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
    .setColor(`#66c4a6`)
    .setAuthor(`Uslu Sa-As Sistemi`, client.user.avatarURL())
    .setDescription(
        `\`\`\`diff
+ Sa As Başarıyla Açıldı!\`\`\``)
    .setTimestamp()
    .setFooter(`Uslu Sa-As Sistemi`, client.user.avatarURL())
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`saasemojılı_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
    .setColor(`#66c4a6`)
    .setAuthor(`Uslu Sa-As Sistemi`, client.user.avatarURL())
    .setDescription(
        `\`\`\`diff
+ Sa As Başarıyla Kapatıldı!\`\`\``)
    .setTimestamp()
    .setFooter(`Uslu Sa-As Sistemi`, client.user.avatarURL())
    return message.channel.send(sa)
}
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'sa-as-emojili'
}; 