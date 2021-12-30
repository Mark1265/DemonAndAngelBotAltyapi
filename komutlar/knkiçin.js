const Discord = require('discord.js');
const db = require('quick.db');
//Dcs Ekibi
exports.run = async(client, message, args) => { 
const yapımcı = 'Anana sor'
const sabihim = 'DemonAndAngel#4820'
  
  
message.channel.send("`" + sabihim + "`  `" + yapımcı + "` beni yapmasıni söyledi ve ben oluştum hepinize merhaba :)")
}
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['söylermisin','syms'], 
  permLevel: 0
};
//Dcs Ekibi
exports.help = {
 name: 'yap'
};