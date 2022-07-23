const Discord = require("discord.js");
const fs = require('fs');



module.exports = {
    name: 'atis',
    description: "this is a atis command!",
    
    execute(client, interaction,options){(async () => {
        fs.readFile('airports.json', (err, data) => {
            if (err) throw err;
            let  airports = JSON.parse(data);
           var  airportShort = airports[options.getString("airport")]
           const responseembed = new Discord.EmbedBuilder()
           .setTitle("Atis-Information Template for: "+options.getString("airport"))
           .setDescription(`
           ∎ ${airportShort} ATIS Information {ATIS Tag} ∎
           **―――――――――――――――――――――――――――――――――――――**
           **Controller Callsign:** ${options.getString("airport")}
           **―――――――――――――――――――――――――――――――――――――**
           **Weather:**
           Winds:
           Clouds:
           Visibility:
           Pressure:
           
           **Aerodrome:**
           Max Taxi Speed: 25KT
           Max ACFT Size: N/A
           Arrival Runway(s):
           Departure Runway(s):
           
           **NOTAMS:**
           Providing top-down control for ILKL.
           VFR ACFT say direction of flight, intentions in flight plan.
           Advise receipt of information {ATIS Tag} on first contact.
           No emergencies.
           **―――――――――――――――――――――――――――――――――――――**
           ∎ End of ATIS Information {ATIS Tag} ∎`)
           .setColor("#ffff00")
           interaction.reply({embeds:[responseembed],
            ephemeral:true})
           
        })
        
        
        
    })();}
}