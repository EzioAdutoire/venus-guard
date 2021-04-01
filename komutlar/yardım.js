const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('V E N U S | M O D E R A T I O N')

  .addField("• | vm+ban",`__Etiketlediğiniz kullanıcıyı banlarsınız.__`)
  .addField("• | vm+unban",`__ID sini yazdığınız kişinin banını kaldırırsınız.__`)
  .addField("• | vm+ban-bilgi",`__Etiketlediğiniz kullanıcının ban siciline bakarsınız.__`)
  .addField("• | vm+sorgula",`__Seste kaç üye olduğunu görürsünüz.__`)
  .addField("• | vm+sesteki-yetkililer",`__Seste kaç yetkili olduğunu görürsünüz.__`)
  .addField("• | vm+gel",`__Sesli odaya gelme teklifi yaparsınız.__`)
  .addField("• | vm+git",`__Sesli odaya gitme teklifi yaparsınız.__`)
  .addField("• | vm+küfür-engel",`__Küfür engel özelliğini aktifleştirirsiniz.__`)
  .addField("• | vm+reklam",`__Reklam engel sistemini açarsınız.__`)
  .addField("• | vm+jail",`__Etiketlediğiniz kişiye jail atarsınız.__`)
  .addField("• | vm+unjail",`__Etiketlediğiniz kişinin jailini kaldırırsınız.__`)
  .addField("• | vm+mute",`__Etiketlediğiniz kişiye mute atarsınız.__`)
  .addField("• | vm+unmute",`__Etiketlediğiniz kişinin mutesini açarsınız.__`)
  .addField("• | vm+vmute",`__Etiketlediğiniz kişiye sesli mute atarsınız.__`)
  .addField("• | vm+vunmute",`__Etiketlediğiniz kişinin sesli mutesini açarsınız.__`)
  .addField("• | vm+sicil",`__Sicilinize bakarsınız.__`)
  .addField("• | vm+sicil-sıfırla",`__Etiketlediğiniz kişinin sicilini sıfırlarsınız sadece **sahipler** içindir.__`)
  .addField("• | vm+rol-al",`__Etiketlediğiniz kişiden belirttiğiniz rolü alırsınız.__`)
  .addField("• | vm+rol-ver",`__Etiketlediğiniz kişiye belirttiğiniz rolü verirsiniz.__`)
  .addField("• | vm+say",`__Sunucudaki üye sayısını görürsünüz.__`)
  .addField("• | vm+tag-say",`__Sunucuda kaç taglı üye olduğunu görürsünüz.__`)
  .addField("• | vm+ses-kes",`__Etiketlediğiniz kişiyi sesten atarsınız.__`)
  .addField("• | vm+temizle",`__100 e kadar belirtilen sayıda mesaj silersiniz.__`)
  .addField("• | vm+snipe",`__Son silinen mesajları gösterir.__`)

  .setDescription("V E N U S | M O D E R A T I O N bilgilendirme menüsü" )
  .setThumbnail("https://i.hizliresim.com/zeDNHU.png")
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}