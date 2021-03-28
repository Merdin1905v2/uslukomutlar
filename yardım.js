const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const yardım = new Discord.MessageEmbed()
    .setAuthor(`Uslu | Yardım Menüsü`)
    .setColor('#66c4a6')
    .setDescription(
    `\`\`\`Uslu'yu kullanırken @Uslu rolünü en yukarıya taşıyınız\`\`\`
    
🔮\`u!eğlence\`
    **Eğlence Kategorisi Eğlenmek İçin İdeal Bir Kategori**✨

🔮\`u!oyun\`
    **Arkadaşlarınla Oyunmu Oynamak İstiyorsun O zaman Uslu Tam Yanında :)**✨

🔮\`u!ekonomi\`
    **Ekonomi Çötü loo :)**✨

🎉\`u!çekiliş\`
    **Çekiliş Var Koşun :)**✨
    
⚙\`u!moderasyon\`
    **İşlerini Kolaylaştıracak Bir Yardımcı İstiyosan Uslu Orada!**⌛
    
📀\`u!ayarlanabilir\`
    **Birçok Sistemi Ayarlamanın İpuçları Burada!**💿
    
🤖\`u!koruma\`
    **Usluyla Sunucunu Korumak İçin Gerekli Kategori!**👍

📀\`u!emoji-rol\`
    **Emoji İle Rol Alma Ayarlarsınız!**💿

👥\`u!kullanıcı\`
    **Tüm Herkese Açık Komutlar Burda Ablalarım Abilerim**👥
    
🔒\`u!sahip\`
    **Sahiplerime Özel Komutlar**❌
    
    **👇Oy Vermek İstermisin?**
    [Tıkla ve uzaya çık](https://www.google.com/)

    **👇Beni Eklemek İstermisin?**
    [Tıkla ve uzaya çık](https://discord.com/oauth2/authorize?client_id=776788372743913522&scope=bot&permissions=8)`
)
    .setThumbnail(client.user.avatarURL())
    .setImage(`https://cdn.discordapp.com/attachments/788683867606745095/797009991307493376/adventure-time-distant-lands-bmo.png`)
message.react("<:uslulogo:822538181039620137>")
message.channel.send(yardım)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ["yardım", "y"]
};

exports.help = {
    name: "yardım"
};