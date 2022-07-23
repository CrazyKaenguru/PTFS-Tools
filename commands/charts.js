const Discord = require("discord.js");
const fs= require("fs")

module.exports = {
  name: "charts",
  description: "this is a ping command!",
  execute(client, interaction, options) {
    (async () => {
        var fs = require('fs');

var image="";
image="https://ptfs.xyz/charts/light/"+options.getString("airport")+"%20Ground%20Chart.png"


      const Chartembed = new Discord.EmbedBuilder()
        .setTitle(options.getString("airport"))
        .setDescription("Chart of "+options.getString("airport"))
        .setColor("#ffff00")
       .setImage(image);
       
      interaction.reply({ embeds: [Chartembed] });
      
    })();
  },
};
