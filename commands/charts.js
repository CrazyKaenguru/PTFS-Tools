const Discord = require("discord.js");
const fs= require("fs")

module.exports = {
  name: "charts",
  description: "this is a ping command!",
  execute(client, interaction, options) {
    (async () => {
        var fs = require('fs');
var array = fs.readFileSync('Airports.txt').toString().split("\n");
for( i in array)
{
 array[i].replace("\r","")
}
console.log(array)
      const Chartembed = new Discord.EmbedBuilder()
        .setTitle(options.getString("mm"))
        .setColor("#ffff00")
        .setImage("https://ptfs.xyz/charts/light/ITKO%20Ground%20Chart.png");
      interaction.reply({ embeds: [Chartembed] });
    })();
  },
};
