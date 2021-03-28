const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(args[0] === 'arındır') {
if(message.author.id !== message.guild.owner.id) return message.channel.send(new Discord.MessageEmbed().setImage('').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}kanal arındır\` __kullanmak için,__ \`Sunucu Sahibi\` __olmanız gerekiyor.__`));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Dikkat et Çok Sakıncalı!')
.setThumbnail('')
.setFooter(message.author.username, message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '')
.setDescription(`${message.author} Sunucunun **Kanallarını** silmek istediğinizden emin misin?

**Bu işlem geri alınamaz**!`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
await message.guild.channels.cache.forEach(channel => channel.delete());
message.guild.channels.create('İşlem Tamamlandı', { type: 'text'}).then(m => {
m.send(new Discord.MessageEmbed()
.setTitle('İşte bu kadar!')
.setThumbnail(client.user.avatarURL())
.setFooter(message.author.username, message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '')
.setDescription(`${message.author} **Sunucu için** \`${client.ayarlar.prefix}kanal-arındır\` **komutunu kullandı.**`));
})
});

no.on('collect', async reaction => {
resulter.delete();
});

})
};
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanal-arındır', 'toplu-kanal-sil', 'kanal'],
  permLevel: 0
}

exports.help = {
  name: 'kanal'
};