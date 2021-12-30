const Discord = require('discord.js');
const db = require('quick.db');
//Dcs Ekibi
exports.run = async(client, message, args) => { 
const sahip = 'Ninja Kedi#6822'

message.channel.send("Benim Yapımcım: `" + sahip + "` ve ben yapımcımı çok ama çok ama çok seviyorum :)")
}
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['yapımcı'], 
  permLevel: 0
};
//Dcs Ekibi
exports.help = {
 name: 'sahip'
};