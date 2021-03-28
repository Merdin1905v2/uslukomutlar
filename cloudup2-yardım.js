const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, params, args) => {
    const yardım = new Discord.MessageEmbed()
    .setColor('#000000')
    .setDescription(`**Önemli Komutlarınız;**
    \`\`\`fix
    • Kurallar •

Reklam
• Sözlü reklamlar, link ile reklam, özelden reklam, resim ile reklam ve benzeri şekilde reklamlar yapmak yasaktır.
    
Küfür, Argo, Hakaret
• Küfür dozunda serbest.
• Üyelere karşı hakaret etmek ve dalga geçme yasaktır.
    
Kanallar
• Komut kanalı haricinde komut kullanılması yasaktır.
• Müzik kanalı haricinde müzik açılması yasaktır.
• Kanal açıklamalarında yararlı bilgiler bulabilirsin.
    
Kişisel Bilgiler
・Sunucudaki herhangi bir üyenin gizlilik haklarını ihlal etmek yasaktır (ifşa, numara vs.)
・Herhangi bir ırk, etnik köken, milli köken, dini inanç, cinsel yönelim, sosyal sınıf, cinsiyet, cinsel kimlik, ciddi bir hastalık veya engellilik ile dalga geçmek yasaktır.
    
Yetkililer ve Yetki
• Yetki istemek yasaktır.
• Yetkilileri boş yere @etiketlemek ve @etiketleyerek spam yapmak yasaktır.
• Yetkililere saygılı olun.
    
Spam ve Etiketleme
• Spam yapmak yasaktır.
• Bir kelimeyi sürekli bir mesajda yazmak yasaktır.
• Bir üyeyi sürekli @etiketlemek yasaktır.
    
Din, Siyaset, Cinsellik 
• Din ile ilgili konuşmak, tartışmak, kullanıcı adlarını din ile ilgili koymak yasaktır.
• Siyaset ile ilgili konuşmak, tartışmak, kullanıcı adlarını siyaset ile ilgili koymak yasaktır.
• 18+ fotoğraflar paylaşmak ve konuşmak yasaktır.
    
Kavga, Tartışmak
• Kavga etmek, kavgaya dahil olmak ve tartışmak yasaktır.
・Herhangi bir ırk, etnik köken, milli köken, dini inanç, cinsel yönelim, sosyal sınıf, cinsiyet, cinsel kimlik, ciddi bir hastalık veya engellilik ile dalga geçmek yasaktır.
    
NOT: Sunucudaki her üye yetkili dahil kuralları okumuş olarak kabul edilir. Buradaki maddelere herhangi bir karşı gelme olayı olduğu an "bilmiyordum, okumamıştım" gibi bahanelerin hiç biri umursanmaz ve gerekli işlem yapılır!\`\`\`
    `)
    .setThumbnail(client.user.avatarURL())
    .setImage(`https://cdn.discordapp.com/attachments/762272650814160917/767718961084497940/kurallar_gif.gif`)
message.channel.send(yardım)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ["kurallar", "k"] // ClodUP Yardım Menüsü
};

exports.help = {
    name: "kurallar"
};