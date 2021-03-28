const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const atamız = new Discord.MessageEmbed()
    .setColor(`#66c4a6`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/816247170437087293/822174593720385586/download.jpg`)
    .setAuthor(`Mustafa Kemal Atatürkü Saygı VE Sevgi İle Anıyoruz`, client.user.avatarURL())
    .setDescription(
        `\`\`\`diff
Mustafa Kemal Atatürk, Türk asker, devlet adamı ve Türkiye Cumhuriyeti'nin kurucusudur. Birinci Dünya Savaşı sırasında Osmanlı ordusunda görev yapan Atatürk; Çanakkale Cephesi'nde miralaylığa, Sina ve Filistin Cephesi'nde ise Yıldırım Orduları komutanlığına atandı.\`\`\`
        
        \`\`\`fix
Doğum tarihi: 1881, Selanik Vilayeti

Ölüm tarihi ve yeri: 10 Kasım 1938, Dolmabahçe Sarayı, İstanbul

Boy: 1,74 m

Eğitim: Mekteb-i Erkân-ı Harbiye (1902–1905)\`\`\``
    )
    .setImage(`https://cdn.discordapp.com/attachments/816247170437087293/822176190626005022/tumblr_750701b8e966b6e8162a46d3f6d95ce5_6db906f5_400.gif`)
    .setFooter(`Mustafa Kemal Atatürkü Saygı VE Sevgi İle Anıyoruz`, client.user.avatarURL())
message.channel.send(atamız)
};

exports.conf = {
    aliases: ["atatürk", "mka", "atamız"]
};

exports.help = {
    name: "atatürk"
};