const Discord = require("discord.js");

const responseembed = new Discord.EmbedBuilder()
.setDescription("Desc")
.setColor('#ffff00')

module.exports = {
    name: 'flight-plan',
    description: "this is a ping command!",
    execute(client, interaction,options){
        notes=(options.getString("notes"))
        if(notes==null)
        {
            notes=""
        }
        const responseembed = new Discord.EmbedBuilder()
        .setTitle("This is your flight-plan!")
        .setDescription(
        `Callsign: ${options.getString("callsign")}
        Aircraft: ${options.getString("aircraft")}
        IFR/VFR: ${options.getString("navigationsystem")}
        Departing: ${options.getString("departing")}
        Arriving: ${options.getString("arriving")}
        FL (Flight Level): ${options.getString("flightlevel")}
        Squawk: ${options.getString("squawk")}
        Notes (Optional): ${notes}`)
        .setColor('#ffff00')
        interaction.reply({embeds:[responseembed]})
    }
}