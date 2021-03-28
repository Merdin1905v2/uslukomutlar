const Discord = require('discord.js')
const db = require('quick.db');
const config = require('../config.json')

exports.run = async (client, message, args) => {
  const as = args[0]
  const saasmesaj = await db.fetch(`saas_${message.guild.id}`);
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || config.prefix
 
  if (!message.member.hasPermission("MANAGE_GUILD")) if(message.author.id !== "768059323951087636") return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);
  
  let mesaj = args.slice(0).join(' ')
  
      if (!mesaj) {
        return message.channel.send(new Discord.MessageEmbed()
                                    .setColor("#66c4a6")
                                    .setAuthor(`Uslu Sa-As Sistemi`, client.user.avatarURL())
                                    .setDescription(
            `\`\`\`diff
+ Sunucu Adı Göstermek İçin: -sunucu-
+ Kullanıcı Belirlemek İçin: -kullanıcı-
+ Bot Sayısı Göstermek İçin: -botsayisi-
+ Kanal Sayısı Göstermek İçin: -kanalsayisi-\`\`\`
             \`\`\`fix
+ Nasıl Kullanılır Örnek: ${prefix}sa-as aç\`\`\``
        )
                                    .setFooter(`Uslu Sa-As Sistemi`, client.user.avatarURL())
        );
    }
  
   if (args[0] === 'kapat') {
    if(!saasmesaj) return message.channel.send(`Ayarlanmayan şeyi kapatamazsın!`)
    db.delete(`saas_${message.guild.id}`)
    message.channel.send(`Sa As Mesajı özelliği başarıyla devredışı bırakıldı!`)
    return
  }
  
    db.set(`saas_${message.guild.id}`, mesaj)
    message.channel.send(new Discord.MessageEmbed()
                         .setColor("#66c4a6")
                         .setTimestamp()
                         .setDescription(`Sa As mesajı başarıyla ayarlandı!` +"\n"+`Mesajınız: \`${mesaj}\` olarak ayarlandı.`))
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sa-as-msg", "sa-as", "saas"],
    permLevel: 2
}

exports.help = {
    name: 'sa-as-mesaj',
    description: 'Sunucuya giren kişiye özelden gönderilecek mesajı ayarlar.',
    usage: 'sa-as-mesaj <yazı>'
}