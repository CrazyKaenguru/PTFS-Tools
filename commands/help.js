const Discord = require("discord.js");

const exampleEmbed = new Discord.EmbedBuilder()
.setDescription("Desc")
.setColor('#ffff00')

module.exports = {
    name: 'help',
    description: "this is a ping command!",
    execute(client, interaction){
        interaction.reply({embeds:[exampleEmbed]})
    }
}