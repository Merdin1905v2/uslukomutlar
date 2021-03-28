const Discord = require('discord.js')
const db = require('quick.db');
const config = require('../config.json')

exports.run = async (client, message, args) => {
  const giris = args[0]
  const ozelmesaj = await db.fetch(`ozelhosgeldin_${message.guild.id}`);
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || config.prefix
 
  if (!message.member.hasPermission("MANAGE_GUILD")) if(message.author.id !== "768059323951087636") return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);
  
  let mesaj = args.slice(0).join(' ')
  
      if (!mesaj) {
        return message.channel.send(new Discord.MessageEmbed()
                                    .setColor("#66c4a6")
                                    .setAuthor(`Uslu DM Hoşgeldin Sistemi`, client.user.avatarURL())
                                    .setDescription(
            `\`\`\`diff
+ Sunucu Adı İçin: -sunucu-
+ Sunucuya Giren Kullanıcı İçin: -kullanıcı-
+ Sunucuya Kullanıcı Girdikten Sonra Kaç Kişi Kaldı Gösterir: -kackısıkaldı-
+ Sunucudaki Şuanki Kullanıcı Sayısını Gösterir: -uyesayisi-
+ Sunucu Böglesini Göstermek İçin: -sunucubolgesi-

+ Mesaja Emoji Eklemek İçin: 
*Bir Tane Emoji Seçin Örnek Altta Var*\`\`\`
             \`\`\`fix
+ Nasıl Kullanılır Örnek: ${prefix}dm-hg 🎀 -kullanıcı- Adlı Kullanıcı -sunucu- Adlı Sunucuya Hoşgeldin Senle Beraber -kackısıkaldı- Bu Kadar Kişi Kaldı Şuan -sunucudakıkullanıcısayısı- Bu Kadar Kişiyiz\`\`\``
        )
                                    .setFooter(`Uslu DM Hoşgeldin Sistemi`, client.user.avatarURL())
        );
    }
  
   if(giris === "sıfırla" || giris === "kapat" || giris === "durdur") {
    if(!ozelmesaj) return message.channel.send(`Ayarlanmayan şeyi kapatamazsın!`)
    db.delete(`ozelhosgeldin_${message.guild.id}`)
    message.channel.send(`Özel Hoşgeldin Mesajı özelliği başarıyla devredışı bırakıldı!`)
    return
  }
  
    db.set(`ozelhosgeldin_${message.guild.id}`, mesaj)
    message.channel.send(new Discord.MessageEmbed()
                         .setColor("#66c4a6")
                         .setTimestamp()
                         .setDescription(`Özel hoşgeldin mesajı başarıyla ayarlandı!` +"\n"+`Mesajınız: \`${mesaj}\` olarak ayarlandı.`))
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["dm-hg"],
    permLevel: 2
}

exports.help = {
    name: 'özelhoşgeldin',
    description: 'Sunucuya giren kişiye özelden gönderilecek mesajı ayarlar.',
    usage: 'özelhoşgeldin <yazı>'
}