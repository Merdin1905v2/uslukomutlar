const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) if(message.author.id !== "768059323951087636") return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor(`#66c4a6`)
                                        .setAuthor(`Uslu Mesaj Arındır Sistemi`, client.user.avatarURL())
                                        .setDescription(
    `\`\`\`diff
🚫 Lütfen Silinicek Mesaj Miktarını Yazın.! 🚫\`\`\``
)
                                        .setFooter(`Uslu Mesaj Arındır Sistemi`, client.user.avatarURL())
                                        );
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${message.member}, ${args[0]} Adet Mesaj Başarıyla Uzaya Fırlatıldı! :rocket:`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mesaj-arındır'],
  permLevel: 0,
};

exports.help = {
  name: 'mesaj-arındır',
  description: 'Mesajları siler',
  usage: 'sil sayı',
}