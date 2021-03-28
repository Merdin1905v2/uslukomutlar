const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../config.json");

exports.run = async (client, message, args) => {
  const cikis = args[0];
   
  const ozelmesaj = await db.fetch(`ozelgorusuruz_${message.guild.id}`);

  let prefix =
    (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||
    config.prefix;

  if (!message.member.hasPermission("MANAGE_GUILD")) if(message.author.id !== "768059323951087636")
    return message.channel.send(
      `Bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın.`
    );

  let mesaj = args.slice(0).join(" ");

  if (!mesaj) {
    return message.channel.send(new Discord.MessageEmbed()
                                    .setColor("#66c4a6")
                                    .setAuthor(`Uslu DM Görüşürüz Sistemi`, client.user.avatarURL())
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
+ Nasıl Kullanılır Örnek: ${prefix}dm-bb 🎀 -kullanıcı- Adlı Kullanıcı -sunucu- Adlı Sunucudan Ayrıldın Görüşürüz Senle Beraber -kackısıkaldı- Bu Kadar Kişi Kaldı Şuan -sunucudakıkullanıcısayısı- Bu Kadar Kişiyiz\`\`\``
        )
                                    .setFooter(`Uslu DM Görüşürüz Sistemi`, client.user.avatarURL())
    );
  }

  if (cikis === "sıfırla" || cikis === "kapat" || cikis === "durdur") {
    if (!ozelmesaj)
      return message.channel.send(`Ayarlanmayan şeyi kapatamazsın!`);
    db.delete(`ozelgorusuruz_${message.guild.id}`);
    message.channel.send(
      `Özel Görüşürüz Mesajı özelliği başarıyla devredışı bırakıldı!`
    );
    return;
  }

  db.set(`ozelgorusuruz_${message.guild.id}`, mesaj);
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#66c4a6")
      .setTimestamp()
      .setDescription(
        `Özel görüşürüz mesajı başarıyla ayarlandı!` +
          "\n" +
          `Mesajınız: \`${mesaj}\` olarak ayarlandı.`
      )
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dm-bb"],
  permLevel: 2
}; 

exports.help = {
  name: "özelgörüşürüz",
  description: "Sunucudan ayrılan kişiye özelden gönderilecek mesajı ayarlar.",
  usage: "özelgörüşürüz <yazı>"
};