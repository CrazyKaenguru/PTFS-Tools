const { Client, GatewayIntentBits } = require("discord.js");
const Discord = require("discord.js");
const prefix = "!";
require("dotenv").config();
const fs= require("fs")
const { name, description } = require("./commands/charts");
const { SlashCommandBuilder } = require('@discordjs/builders');

const client = new Discord.Client({
  allowedMentions: {
    parse: ["users", "roles"],
    repliedUser: true,
  },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages
  ],
  partials: ["CHANNEL"],
});
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Bot is online!");
  client.user.setActivity("PTFS-Tools", {
    type: "WATCHING",
   });

const guildID="950418591088529448"
const guild= client.guilds.cache.get(guildID)
let commands
if(guild&&process.env.localcommand=="true")
{
    commands=guild.commands
    console.log("Command: only test guild")
}
else
{
    commands=client.application?.commands
    console.log("Command: global")
}

commands?.create({
    name:"chart",
    description:"shows the charts!",
    options:[
        {
            name:"airport",
            description:"Airport you want the chart from",
            required:true,
            type:Discord.ApplicationCommandOptionType.String,
            choices:[{
                name:"Tokyo",
                value:"ITKO",
            },
            {
                name:"Henstridge Airfield",
                value:"IHEN",
            },
            {
                name:"Barra Airport",
                value:"IBAR",
            },
            {
                name:"Paphos",
                value:"IPAP",
            },
            {
                name:"RAF Scampton",
                value:"ISCM",
            },
            {
                name:"Al Najaf",
                value:"IJAF",
            },
            {
                name:"Air Base Garry",
                value:"IGAR",
            },
            {
                name:"Larnaca Intl.",
                value:"ILAR"
            },
            {
                name:"Paphos Intl.",
                value:"IPAP",
            },
            {
                name:"Grindavik",
                value:"IGRV",
            },
            {
                name:"Izolirani",
                value:"IZOL",
            },
            {
                name:"Saba Airport",
                value:"IDCS",
            },
            {
                name:"Lukla Airport",
                value:"ILKL",
            },
            {
                name:"Perth Intl.",
                value:"IPPH",
            },
            {
                name:"Boltic Airfield",
                value:"IBLT",
            },
            {
                name:"Greater Rockford",
                value:"IRFD",
            },
            {
                name:"Mellor Intl.",
                value:"IMLR",
            },
            {
                name:"Training Centre",
                value:"ITRC",
            },
            {
                name:"Saint Barthelemy",
                value:"IBTH",
            },
            {
                name:"Ufo Base",
                value:"IUFO",
            },
            {
                name:"Sauthamptona Airport",
                value:"ISAU",
            },
            ]
            
        }
    ]
})
commands?.create({
    name:"help",
    description:"Get help!"
})
commands?.create({
    name:"atis",
    description:"Get a atis Information Template!",
    options:[
        {
            
                name:"airport",
                description:"Airport you want the chart from",
                required:true,
                type:Discord.ApplicationCommandOptionType.String,
                choices:[{
                    name:"Tokyo",
                    value:"Tokyo",
                },
                {
                    name:"Henstridge Airfield",
                    value:"Henstridge Airfield",
                },
                {
                    name:"Barra Airport",
                    value:"Barra Airport",
                },
                {
                    name:"Paphos",
                    value:"Paphos",
                },
                {
                    name:"RAF Scampton",
                    value:"RAF Scampton",
                },
                {
                    name:"Al Najaf",
                    value:"Al Najaf",
                },
                {
                    name:"Air Base Garry",
                    value:"Air Base Garry",
                },
                {
                    name:"Larnaca Intl.",
                    value:"Larnaca Intl."
                },
                {
                    name:"Paphos Intl.",
                    value:"Paphos Intl.",
                },
                {
                    name:"Grindavik",
                    value:"Grindavik",
                },
                {
                    name:"Izolirani",
                    value:"Izolirani",
                },
                {
                    name:"Saba Airport",
                    value:"Saba Airport",
                },
                {
                    name:"Lukla Airport",
                    value:"Lukla Airport",
                },
                {
                    name:"Perth Intl.",
                    value:"Perth Intl.",
                },
                {
                    name:"Boltic Airfield",
                    value:"Boltic Airfield",
                },
                {
                    name:"Greater Rockford",
                    value:"Greater Rockford",
                },
                {
                    name:"Mellor Intl.",
                    value:"Mellor Intl.",
                },
                {
                    name:"Training Centre",
                    value:"Training Centre",
                },
                {
                    name:"Saint Barthelemy",
                    value:"Saint Barthelemy",
                },
                {
                    name:"Ufo Base",
                    value:"Ufo Base",
                },
                {
                    name:"Sauthamptona Airport",
                    value:"Sauthamptona Airport",
                },
            ]
        }
    ]
})
commands?.create({
    name:"flight-plan",
    description:"create a flight-plan!",
    options:[
        {
            name:"callsign",
            description:"Enter your Aircrafts Callsign!",
            required:true,
            type:Discord.ApplicationCommandOptionType.String,
        },
        {
            name:"aircraft",
            description:"Enter your Aircrafts Name!",
            required:true,
            type:Discord.ApplicationCommandOptionType.String,
        },
        {
            name:"navigationsystem",
            description:"Choose IFR or VFR here!",
            required:true,
            type:Discord.ApplicationCommandOptionType.String,
            choices:[
                {
                    name:"IFR",
                    value:"IFR",
                },
                {
                    name:"VFR",
                    value:"VFR",
                }
            ]
        },
        {
            name:"departing",
            description:"Enter your departing-location here!",
            required:true,
            type:Discord.ApplicationCommandOptionType.String,
            choices:[{
                name:"Tokyo",
                value:"Tokyo",
            },
            {
                name:"Henstridge Airfield",
                value:"Henstridge Airfield",
            },
            {
                name:"Barra Airport",
                value:"Barra Airport",
            },
            {
                name:"Paphos",
                value:"Paphos",
            },
            {
                name:"RAF Scampton",
                value:"RAF Scampton",
            },
            {
                name:"Al Najaf",
                value:"Al Najaf",
            },
            {
                name:"Air Base Garry",
                value:"Air Base Garry",
            },
            {
                name:"Larnaca Intl.",
                value:"Larnaca Intl."
            },
            {
                name:"Paphos Intl.",
                value:"Paphos Intl.",
            },
            {
                name:"Grindavik",
                value:"Grindavik",
            },
            {
                name:"Izolirani",
                value:"Izolirani",
            },
            {
                name:"Saba Airport",
                value:"Saba Airport",
            },
            {
                name:"Lukla Airport",
                value:"Lukla Airport",
            },
            {
                name:"Perth Intl.",
                value:"Perth Intl.",
            },
            {
                name:"Boltic Airfield",
                value:"Boltic Airfield",
            },
            {
                name:"Greater Rockford",
                value:"Greater Rockford",
            },
            {
                name:"Mellor Intl.",
                value:"Mellor Intl.",
            },
            {
                name:"Training Centre",
                value:"Training Centre",
            },
            {
                name:"Saint Barthelemy",
                value:"Saint Barthelemy",
            },
            {
                name:"Ufo Base",
                value:"Ufo Base",
            },
            {
                name:"Sauthamptona Airport",
                value:"Sauthamptona Airport",
            },
        ]
        },
        {
            name:"arriving",
            description:"Enter your arriving-location here!",
            required:true,
            type:Discord.ApplicationCommandOptionType.String,
            choices:[{
                name:"Tokyo",
                value:"Tokyo",
            },
            {
                name:"Henstridge Airfield",
                value:"Henstridge Airfield",
            },
            {
                name:"Barra Airport",
                value:"Barra Airport",
            },
            {
                name:"Paphos",
                value:"Paphos",
            },
            {
                name:"RAF Scampton",
                value:"RAF Scampton",
            },
            {
                name:"Al Najaf",
                value:"Al Najaf",
            },
            {
                name:"Air Base Garry",
                value:"Air Base Garry",
            },
            {
                name:"Larnaca Intl.",
                value:"Larnaca Intl."
            },
            {
                name:"Paphos Intl.",
                value:"Paphos Intl.",
            },
            {
                name:"Grindavik",
                value:"Grindavik",
            },
            {
                name:"Izolirani",
                value:"Izolirani",
            },
            {
                name:"Saba Airport",
                value:"Saba Airport",
            },
            {
                name:"Lukla Airport",
                value:"Lukla Airport",
            },
            {
                name:"Perth Intl.",
                value:"Perth Intl.",
            },
            {
                name:"Boltic Airfield",
                value:"Boltic Airfield",
            },
            {
                name:"Greater Rockford",
                value:"Greater Rockford",
            },
            {
                name:"Mellor Intl.",
                value:"Mellor Intl.",
            },
            {
                name:"Training Centre",
                value:"Training Centre",
            },
            {
                name:"Saint Barthelemy",
                value:"Saint Barthelemy",
            },
            {
                name:"Ufo Base",
                value:"Ufo Base",
            },
            {
                name:"Sauthamptona Airport",
                value:"Sauthamptona Airport",
            },
        ]
        },
        {
            name:"flightlevel",
            description:"Enter your flightlevel here!",
            required:true,
            type:Discord.ApplicationCommandOptionType.String,
        },
        {
            name:"squawk",
            description:"Enter your sqawk-code here!",
            required:true,
            type:Discord.ApplicationCommandOptionType.String,
        },
        {
            name:"notes",
            description:"Enter your Notes here!",
            type:Discord.ApplicationCommandOptionType.String,
        },
        
    ]
})

});
client.on("interactionCreate",async (interaction)=>{
if(!interaction.type === interaction.type.ApplicationCommand){
    return
}
const { commandName,options}=interaction
if(commandName=="help")
{
    client.commands.get("help").execute(client,interaction);
}
if(commandName=="chart")
{
    client.commands.get("charts").execute(client,interaction,options);
}
if(commandName=="atis")
{
    client.commands.get("atis").execute(client,interaction,options);
}
if(commandName=="flight-plan")
{
    client.commands.get("flight-plan").execute(client,interaction,options);
}
if(commandName=="add")
{
    const num1= options.getNumber("num1") ||0
    const num2 = options.getNumber("num2")||0
    await interaction.deferReply({
        ephemeral:true
    })
    interaction.editReply({
        content:`The sum is: ${num1+num2}`
    })

}


})



client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLocaleLowerCase();
});
client.login(process.env.token);
