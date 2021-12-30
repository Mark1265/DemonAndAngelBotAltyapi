const Discord = require('discord.js');
const db = require('quick.db');
//Dcs Ekibi
exports.run = async(client, message, args) => { 

message.channel.send("DemonAndAngel  sahibime beni yapmasıni söyledi ve ben oluştum hepinize merhaba :)")
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