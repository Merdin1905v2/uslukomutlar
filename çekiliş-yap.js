const ms = require('ms')
const Discord = require('discord.js');
const ayarlar = require("../config.json");
exports.run = async (client, message, args) => { 
let prefix = ayarlar.prefix 
 if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
    message.channel.send(embed);
    return;
  }
  let giveawayChannel = message.mentions.channels.first();
  if(!giveawayChannel){
      return message.channel.send(new Discord.MessageEmbed()
      .setColor(`#66c4a6`)
      .setAuthor(`Uslu Çekiliş Sistemi`, client.user.avatarURL())
      .setDescription(
        `\`\`\`diff
Lütfen bir *kanal süre*, *kazanan* ve *ödül* belirtin!\`\`\`
        \`\`\`fix
Örnek kullanım: ${prefix}çekiliş-yap #kanal 1h 1 Nitro Classic\`\`\``
        )
      .setFooter(`Uslu Çekiliş Sistemi`, client.user.avatarURL())
      );
  }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(new Discord.MessageEmbed()
        .setColor(`#66c4a6`)
        .setAuthor(`Uslu Çekiliş Sistemi`, client.user.avatarURL())
        .setDescription(
          `\`\`\`diff
Lütfen bir *kanal süre*, *kazanan* ve *ödül* belirtin!\`\`\`
          \`\`\`fix
Örnek kullanım: ${prefix}çekiliş-yap #kanal 1h 1 Nitro Classic\`\`\``
          )
        .setFooter(`Uslu Çekiliş Sistemi`, client.user.avatarURL())
        );
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners)){
        return message.channel.send(new Discord.MessageEmbed()
        .setColor(`#66c4a6`)
        .setAuthor(`Uslu Çekiliş Sistemi`, client.user.avatarURL())
        .setDescription(
          `\`\`\`diff
Lütfen bir *kanal süre*, *kazanan* ve *ödül* belirtin!\`\`\`
          \`\`\`fix
Örnek kullanım: ${prefix}çekiliş-yap #kanal 1h 1 Nitro Classic\`\`\``
          )
        .setFooter(`Uslu Çekiliş Sistemi`, client.user.avatarURL())
        );
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send(new Discord.MessageEmbed()
        .setColor(`#66c4a6`)
        .setAuthor(`Uslu Çekiliş Sistemi`, client.user.avatarURL())
        .setDescription(
          `\`\`\`diff
Lütfen bir *kanal süre*, *kazanan* ve *ödül* belirtin!\`\`\`
          \`\`\`fix
Örnek kullanım: ${prefix}çekiliş-yap #kanal 1h 1 Nitro Classic\`\`\``
          )
        .setFooter(`Uslu Çekiliş Sistemi`, client.user.avatarURL())
        );
    }

 client.giveawaysManager.start(giveawayChannel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayNumberWinners,
            hostedBy: message.author,
            messages: {
            giveaway: "🎉  **ÇEKİLİŞ**  🎉",
                giveawayEnded: "🎉  **ÇEKİLİŞ SONLANDI**  🎉",
                timeRemaining: "Kalan süre: **{duration}**!",
                inviteToParticipate: "🎉 emojisine basarak katıl!",
                winMessage: "🎉 Tebrikler, {winners}! **{prize}** ödülünü kazandınız!",
                embedFooter: "Çekiliş",
                noWinner: "bir kazanan belirlenemedi!",
                hostedBy: "Çekiliş sponsoru: {user}",
                winners: "kazananlar",
                endedAt: "Bitiş tarihi",
units: {
                    seconds: "Saniye",
                    minutes: "Dakika",
                    hours: "Saat",
                    days: "Gün",
                    pluralS: false 
                }
            }
        });

    message.channel.send(`🎉 **Çekiliş** ${giveawayChannel} adlı kanalda başlatıldı!`).then(a => a.delete({timeout: 10000}));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiliş-başlat'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş-yap',
  description: 'çekiliş',
  usage: 'çekiliş-yap'
};
