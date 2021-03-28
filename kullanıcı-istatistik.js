const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../config.json");
const os = require("os");
require("moment-duration-format");
const db = require("quick.db");


exports.run = async (client, message, args) => {

  const duration = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");

  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;
  let s = `${moment(client.user.createdAt).format("DD")} ${
    aylar[moment(client.user.createdAt).format("MM")]
  } ${moment(client.user.createdAt).format("YYYY HH:mm:ss")}`;
  let dil = `<:tr_flag:814443682086387733> [Türkçe](https://tr.wikipedia.org/wiki/T%C3%BCrk%C3%A7e)`;

  const msg = new Discord.MessageEmbed()
    .setColor("#66c4a6")
    .setThumbnail(client.user.avatarURL())
    .setImage(`https://cdn.discordapp.com/attachments/788683867606745095/797009991307493376/adventure-time-distant-lands-bmo.png`)
    .setAuthor(`Uslu İstatistik`, client.user.avatarURL())
    .addField("**Botun Ana Sahibi:**", `<@768059323951087636>`, false)
    .addField("**Botun Ana Dili:**", dil)
    .addField(
      "**Hizmet Verdiği Kullanıcı Sayısı:**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      false
    )
    .addField(
      "**Hizmet Verdiği Sunucu Sayısı:**",
      client.guilds.cache.size.toLocaleString(),
      false
    )
    .addField(
      "**Hizmet Verdiği Kanal Sayısı:**",
      client.channels.cache.size.toLocaleString(),
      false
    )
    .addField("**Discord.JS sürüm:**", "v" + Discord.version, false)
    .addField("**Node.JS sürüm:**", `${process.version}`, false)
    .addField("**Uptime Süresi**", duration)
    .addField("**Botun Kuruluş Tarihi**", s);
  return message.channel.send(msg);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "istatislik"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};