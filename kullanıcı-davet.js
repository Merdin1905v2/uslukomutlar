const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const davet = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Davet`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Uslu'yu kullanırken @Uslu rolünü en yukarıya taşıyınız\`\`\`
    
    **👇Destek Sunucuma Gelmek İstersen?**
    [Tıkla ve uzaya çık](https://discord.gg/4e7RSTyQGH)

    **👇Oy Vermek İstermisin?**
    [Tıkla ve uzaya çık](https://www.google.com/)

    **👇İnternet Sitesine Gitmek İçin?**
    [Tıkla ve uzaya çık](http://185.171.1.218/)

    **👇Beni Eklemek İstermisin?**
    [Tıkla ve uzaya çık](https://discord.com/oauth2/authorize?client_id=776788372743913522&scope=bot&permissions=8)`
)
    .setThumbnail(client.user.avatarURL())
    .setImage(`https://cdn.discordapp.com/attachments/788683867606745095/797009991307493376/adventure-time-distant-lands-bmo.png`)
message.channel.send(davet)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ["d", "davet", "invite"]
};

exports.help = {
    name: "davet"
};