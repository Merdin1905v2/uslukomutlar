const Discord = require("discord.js");
const ayarlar = require("../config.json");

exports.run = (client, message, params) => {
  if (!message.guild) {

const EmbedSuspect = new Discord.MessageEmbed()

      .setColor(0x66c4a6)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","**----------------------------------------------------------**");

return message.author.send(EmbedSuspect);
 
}
  if (message.channel.type !== "dm") {

const EmbedSuspect = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " Polis Geliyor!!!!")
      .setColor("#ffd000")
      .setTimestamp()
      .setDescription("")
      .setImage("http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif");

return message.channel.send(EmbedSuspect);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ara155",
  description: "Suspect",
  usage: "ara155"
};
