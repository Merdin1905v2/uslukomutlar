const Discord = require("discord.js");
const ayarlar = require("../config.json");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) if(message.author.id !== "768059323951087636") return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);

  let channel = message.mentions.channels.first();
  if (!channel) {
    return message.channel.send(new Discord.MessageEmbed()
 .setColor(`#66c4a6`)
 .setAuthor(`Uslu Giriş - Çıkış Sistem`, client.user.avatarURL())
 .setDescription(
     `\`\`\`diff
+ Bir Kanal Etiketleyiniz\`\`\``)
 .setImage(`https://cdn.discordapp.com/attachments/816247170437087293/822023045937233930/Ekran_Goruntusu_290.png`)
 .setFooter(`Uslu Giriş - Çıkış Sistem`, client.user.avatarURL()));
  }
  db.set(`gçkanal_${message.guild.id}`, channel.id);
  //var i = db.set(`capsE_${message.guild.id}`, "acik")
  message.channel.send(new Discord.MessageEmbed()
 .setColor(`#66c4a6`)
 .setAuthor(`Uslu Giriş - Çıkış Sistem`, client.user.avatarURL())
 .setDescription(
     `\`\`\`diff
Resimli Hoşgeldin - Güle Güle kanalı\`\`\`${channel}\`\`\`diff
Olarak Ayarlandı\`\`\``)
 .setImage(`https://cdn.discordapp.com/attachments/816247170437087293/822023045937233930/Ekran_Goruntusu_290.png`)
 .setFooter(`Uslu Giriş - Çıkış Sistem`, client.user.avatarURL()));
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gç-ayarla"],
  permLevel: 0
};
 
exports.help = {
  name: "giriş-çıkış-ayarla",
  description: "Giriş Çıkış Kanalını Ayarlar.",
  usage: "gç-ayarla <#kanal>"
};