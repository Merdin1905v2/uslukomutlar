const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const güncelleme = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Güncelleme`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Uslu'yu kullanırken @Uslu rolünü en yukarıya taşıyınız\`\`\`
<a:boost1:732696855821156571>\`\`\`diff
Çekiliş Sistemi Yenilendi,
NSFW Komutları Geldi,
Oylama Komutu Getirildi,
Ekonomi Sistemi Geldi,
Emoji Rol Sistemi Geldi\`\`\`<a:dn:722991376207314964>
    
    **👇Oy Vermek İstermisin?**
    [Tıkla ve uzaya çık](https://www.google.com/)

    **👇Beni Eklemek İstermisin?**
    [Tıkla ve uzaya çık](https://discord.com/oauth2/authorize?client_id=776788372743913522&scope=bot&permissions=8)`
)
    .setThumbnail(client.user.avatarURL())
    .setImage(`https://cdn.discordapp.com/attachments/788683867606745095/797009991307493376/adventure-time-distant-lands-bmo.png`)
message.react("<:uslulogo:822538181039620137>")
message.channel.send(güncelleme)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ["güncelleme", "güncelleme-bilgileri"]
};

exports.help = {
    name: "güncelleme"
};