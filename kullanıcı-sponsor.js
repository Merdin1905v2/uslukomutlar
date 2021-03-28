const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const davet = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Sponsor`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Yoldaş Host Burası Neresimi?\`\`\`
    <:textchannelclaro:792113435110408262> **VDS, HOSTING, DOMAIN ALABILECEGIN GUVENILIR BIR YER**
    <:textchannelclaro:792113435110408262> **__7/24__ Desteğe Bakan Destek Ekib Ve Saygılı Bir Ekib**

    <:mensagensfixadas:790509858973155328> **Hadi Ne Duruyorsun Sende Ne Duruyorsun Al Bir Sunucu Keyfini Çıkar**
    
    **👇YoldaşHost Discord Sunucusu?**
    [Tıkla ve uzaya çık](https://discord.gg/SB3uPERr7e)

    **👇YoldaşHost WebSite?**
    [Tıkla ve uzaya çık](https://www.yoldashost.com/)`
)
    .setThumbnail(client.user.avatarURL())
    .setImage(`https://cdn.discordapp.com/attachments/788683867606745095/797009991307493376/adventure-time-distant-lands-bmo.png`)
message.channel.send(davet)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ["s", "sponsor", "partner"]
};

exports.help = {
    name: "sponsor"
};