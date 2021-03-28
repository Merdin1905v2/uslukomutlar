const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

if(message.author.id === message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setTitle('**La Sunucu Sahibisin Sana __AFK__ Yakışmaz hadi Bidahakine İşine Git :)**'));
if(!args[0]) reason = 'Bilgi verilmedi.';
if(args[0]) reason = args[0];

message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/avatars/776788372743913522/6da090091099344c6379c1abce357340.webp').setTitle(`${client.user.username} - Away From Keyboard`).setDescription(`${message.author} **Adlı Kullanıcı Bilgisayar Başında Değil Veya İşi Var**!\n\n• **Sebep:** \`${reason}\``)).then(a => a.delete({timeout: 10000}));
data.set(`name.${message.author.id}.${message.guild.id}`, message.member.displayName);
message.member.setNickname('[AFK] '+message.member.displayName);
data.set(`kullanıcı.${message.author.id}.${message.guild.id}`, reason);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk'
};