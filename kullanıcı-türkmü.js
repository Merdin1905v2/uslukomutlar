const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const türkmü = new Discord.MessageEmbed()
    .setAuthor(`Türk Botumu ?`, client.user.avatarURL())
    .setColor('#66c4a6')
    .setDescription(
    `:flag_az:
\`\`\`diff
Həm Azərbaycan :)\`\`\`
      :flag_tr:
\`\`\`diff
Hem Türk Botuyum :)\`\`\``
)
    .setThumbnail(client.user.avatarURL())
    .setImage(`https://cdn.discordapp.com/attachments/822371998863851571/822825279646990356/f82fff9f8d1f384a.png`)
    .setTimestamp()
    .setFooter(`Türk Botuymuş`, client.user.avatarURL())
message.react("<:uslulogo:822538181039620137>")
message.channel.send(türkmü)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ["türkmüsün", "türk", "türkmü"]
};

exports.help = {
    name: "türkbotumu"
};