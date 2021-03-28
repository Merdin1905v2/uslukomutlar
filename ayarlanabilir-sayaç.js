const Discord = require('discord.js')
const db = require('quick.db')
const proxie = require('../config.json')
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın.")
  
  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()

      
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") return message.channel.send(new Discord.MessageEmbed()
      .setColor(`#66c4a6`)
      .setAuthor(`Uslu Sayaç Sistemi`, client.user.avatarURL())
      .setDescription(
          `\`\`\`diff
+ Bu komutu kullanabilmek için *Yönetici* yetkisine sahip olmalısın\`\`\`
           \`\`\`fix
+ Sayı Yaz Örnek: u!sayaç ayarla 100\`\`\`
           \`\`\`fix
+ Kanal Etiketle Örnek: u!sayaç ayarla <sayı> #sayaç\`\`\`
           \`\`\`fix
+ Sıfırlamak İçin Örnek: u!sayaç sıfırla\`\`\``
      )
      .setImage(`https://cdn.discordapp.com/attachments/818177663448514560/822532985348685894/Ekran_Goruntusu_287.png`)
      .setFooter(`Uslu Sayaç Sistemi`, client.user.avatarURL()))
    if(args[0] === "sıfırla") {
    if(!sayacsayi) {
      message.channel.send(new Discord.MessageEmbed()
                          .setColor(`#66c4a6`)
                          .setThumbnail(client.user.avatarURL())
                          .setAuthor(`Uslu Sayaç Sistemi`, client.user.avatarURL())
                          .setDescription(
           `\`\`\`fix
+ Ayarlanmamış Sayacı Sıfırlayamazsın\`\`\`
            \`\`\`fix
+ Sıfırlamak İçin Örnek: u!sayaç sıfırla\`\`\``)
                          .setImage(`https://cdn.discordapp.com/attachments/818177663448514560/822532985348685894/Ekran_Goruntusu_287.png`)
                          .setFooter(`Uslu Sayaç Sistemi`, client.user.avatarURL())
                          )
return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed()
                          .setColor(`#66c4a6`)
                          .setThumbnail(client.user.avatarURL())
                          .setAuthor(`Uslu Sayaç Sistemi`, client.user.avatarURL())
                          .setDescription(
           `\`\`\`fix
+ Sayaç Başarıyla Sıfırlandı\`\`\`
            \`\`\`diff
+ Sayaç Ayarlamak İçin Örnek: u!sayaç ayarla <sayı> #kanal\`\`\``)
                          .setImage(`https://cdn.discordapp.com/attachments/818177663448514560/822532985348685894/Ekran_Goruntusu_287.png`)
                          .setFooter(`Uslu Sayaç Sistemi`, client.user.avatarURL()))
    return
  }
  
  if(args[0] === "ayarla") {
  if(isNaN(args[1])) {
    message.channel.send(new Discord.MessageEmbed()
      .setColor(`#66c4a6`)
      .setAuthor(`Uslu Sayaç Sistemi`, client.user.avatarURL())
      .setDescription(
           `\`\`\`fix
+ Bir Sayı Yazmalısın\`\`\``
      )
      .setImage(`https://cdn.discordapp.com/attachments/818177663448514560/822532985348685894/Ekran_Goruntusu_287.png`)
      .setFooter(`Uslu Sayaç Sistemi`, client.user.avatarURL()))
    return
  }
  
  if(!sayackanal) {
   await message.channel.send(new Discord.MessageEmbed()
      .setColor(`#66c4a6`)
      .setAuthor(`Uslu Sayaç Sistemi`, client.user.avatarURL())
      .setDescription(
           `\`\`\`fix
+ Sayaç Kanalını Etiketlemelisin\`\`\``
      )
      .setImage(`https://cdn.discordapp.com/attachments/818177663448514560/822532985348685894/Ekran_Goruntusu_287.png`)
      .setFooter(`Uslu Sayaç Sistemi`, client.user.avatarURL()))
  return
  }
  
  

  

 
        if(args[1] <= message.guild.memberCount) {
                message.channel.send(new Discord.MessageEmbed()
      .setColor(`#66c4a6`)
      .setAuthor(`Uslu Sayaç Sistemi`, client.user.avatarURL())
      .setDescription(
           `\`\`\`fix
Sunucudaki Kullanıcı Sayısından *${message.guild.memberCount}* Daha Yüksek Sayı Girmelisin\`\`\``
      )
      .setImage(`https://cdn.discordapp.com/attachments/818177663448514560/822532985348685894/Ekran_Goruntusu_287.png`)
      .setFooter(`Uslu Sayaç Sistemi`, client.user.avatarURL()))
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[1])
  db.set(`sayacK_${message.guild.id}`, sayackanal.id)
  
  message.channel.send(new Discord.MessageEmbed()
      .setColor(`#66c4a6`)
      .setAuthor(`Uslu Sayaç Sistemi`, client.user.avatarURL())
      .setDescription(
           `\`\`\`fix
Sayaç Ayarlandı ${args[1]}\`\`\` \`\`\`fix
Sayaç Kayıt Kanalı\`\`\` ${sayackanal} \`\`\`fix
Olarak Ayarlandı.\`\`\``
      )
      .setImage(`https://cdn.discordapp.com/attachments/818177663448514560/822532985348685894/Ekran_Goruntusu_287.png`)
      .setFooter(`Uslu Sayaç Sistemi`, client.user.avatarURL()))
}
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [''],
        permLevel: 0
}
 
exports.help = {
        name: 'sayaç',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}