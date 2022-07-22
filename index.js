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

client.on("ready", () => {
  console.log("Bot is online!");
  //client.user.setActivity(``, {
  //type: "WATCHING",
  // });

const guildID="950418591088529448"
const guild= client.guilds.cache.get(guildID)
let commands
if(guild)
{
    commands=guild.commands
}
else
{
    commands=client.application?.commands
}

commands?.create({
    name:"chart",
    description:"shows the charts!",
    options:[
        {
            name:"mm",
            description:"mmm",
            required:true,
            type:Discord.ApplicationCommandOptionType.String,
            choices:[{
                name:"Tokyo",
                value:"Tokyo",
            },
            {
                name:"Perth",
                value:"Perth",
            },
            {
                name:"Izolirani",
                value:"Izolirani",
            },
            {
                name:"Paphos",
                value:"Paphos",
            },
            {
                name:"Larnaca",
                value:"Larnaca",
            },
            {
                name:"Sauthemptona",
                value:"Sauthemptona",
            },
            {
                name:"Garry",
                value:"Garry",
            }
            ]
            
        }
    ]
})




commands?.create({
    name:"help",
    description:"Get help!"
})
commands?.create({
    name:"add",
    description:"adds two Numbers",
    options:[
        {
        name:"num1",
        description:"number one",
        required:true,
        type:Discord.ApplicationCommandOptionType.Number,
        },
        {
            name:"num2",
            description:"number one",
            required:true,
            type:Discord.ApplicationCommandOptionType.Number,
       },
    ]
})
});
client.on("interactionCreate",async (interaction)=>{
if(!interaction.type === interaction.type.ApplicationCommand){
    return
}
const { commandName,options}=interaction
if(commandName=="ping")
{
    interaction.reply({
        content:"pong",
        ephemeral:true

    })
}
if(commandName=="help")
{
    client.commands.get("help").execute(client,interaction);
}
if(commandName=="chart")
{
    client.commands.get("charts").execute(client,interaction,options);
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
