  permLevel: 32const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Gerizekalı yarrak piç bişe yazda bende seni taklit ediyim beyinsiz ben senin ananı bananı avradını bacını taşşaklarını sikiyim piç');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  aliases: ['s  permLevel: ay', 'söyle'],
  permLevel: 3,
  kategori: 'Genel'
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yainiz şey]'
};
