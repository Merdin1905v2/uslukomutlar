const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) if(message.author.id !== "768059323951087636") return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        const mesajtakip = new Discord.MessageEmbed()
    .setColor(`#66c4a6`)
    .setThumbnail(client.user.avatarURL())
    .setAuthor(`Uslu Mesaj-Takip Sistemi`, client.user.avatarURL())
    .setDescription(
     `\`\`\`diff
+ Kimin Ne Yazdıgını Görürsünüz\`\`\`

\`\`\`fix
+ Bir Kanal Etiketle\`\`\``
    )
    .setImage(`https://cdn.discordapp.com/attachments/822371998863851571/822768597763751986/Ekran_Goruntusu_305.png`)
    .setFooter(`Uslu Mesaj-Takip Sistemi`, client.user.avatarURL())
message.channel.send(mesajtakip)
let mesajtakipk = message.mentions.channels.first();
let mesajtakipkanal = await db.fetch(`mesajtakip_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!mesajtakipk) return message.channel.send(`Mesaj Takip Kanalı Zaten ayarlı değil.`);
    db.delete(`mesajtakip_${message.guild.id}`)
   message.channel.send(`Mesaj Takip Kanalı başarıyla sıfırlandı.`);
    return
  }
  //Casper
if (!mesajtakipk) return message.react(`✔`);

db.set(`mesajtakip_${message.guild.id}`, mesajtakipk.id)

message.channel.send(`Mesaj Takip kanalı başarıyla ${mesajtakipk} olarak ayarlandı.`);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mesaj-takip','mesajtakip']
};

exports.help = {
    name: 'mesaj-takip',
    description: 'mesaj-takip kanalını belirler.',
    usage: 'mesaj-takip <#kanal>'
};