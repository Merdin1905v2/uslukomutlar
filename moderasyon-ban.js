const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) if(message.author.id !== "768059323951087636") {
    const embed = new Discord.MessageEmbed()
      .setDescription("Bu komutu kullanabilmek için \`Üyeleri Yasakla\` yetkisine sahip olmalısın!")
      .setColor("#66c4a6");
 
    message.channel.send(embed);
    return;
  }
 
  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen banlanacak kişiyi etiketleyiniz!")
        .setColor("#66c4a6")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
 
  const embed = new Discord.MessageEmbed()
    .setColor("#66c4a6")
    .setDescription(`${u} Adlı şahsın sunucudan banlanmasını onaylıyor musunuz?`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
         const ban = new Discord.MessageEmbed()
         .setColor(`#66c4a6`)
        .setDescription(`İşlem onaylandı! ${u} adlı şahıs sunucudan banlandı!`)
        .setImage(`https://cdn.discordapp.com/attachments/816247170437087293/819157725886808114/7Ork.gif`)
        .setFooter(`Banlandı`, bot.user.avatarURL())
        message.channel.send(ban);
 
        message.guild.member(u).ban();
      }
    });
  });
};
 
module.exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 
module.exports.help = {
  name: "ban",
  description: "kick",
  usage: "ban"
};