const Discord = require("discord.js");

module.exports.run = async(client,message,args) => {

if(!message.member.hasPermission("MANAGE_CHANNELS")) if(message.author.id !== "768059323951087636") return message.channel.send("`Bu Komutu Kullanmak İçin Kanalları Yönet Yetkisine Sahip Olmalısın!`");
message.channel.clone({position: message.channel.position});
message.channel.delete();

};
module.exports.conf = {
enabled: true,
guildOnly: false,
aliases:[],
permLevel: 0.
};
module.exports.help = {
name: 'nuke',
description: 'Kanalı Siler Aynı Özelliklere Sahip Kanal Açar.',
usage: '<prefix>nuke'
};