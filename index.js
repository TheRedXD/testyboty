// @ts-check

const Discord = require("discord.js");
const dotenv = require("dotenv");
let cmdh = require("./cmdh");
dotenv.config();
const config = require("./config.js");
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS]});

client.on("ready", () => {
  console.log(client.user.tag +" has logged in!");
});
client.on("message", (msg) => {
  if (config.get("settings")["prefix"][msg.guild.id] == undefined) {
    cmdh.handlePrefix(msg, config.get("settings")["defaultPrefix"]);
  } else {
    cmdh.handlePrefix(msg, config.get("settings")["prefix"][msg.guild.id]);
  }
  console.log(msg.author.tag+": "+msg.content)
});
client.on("interactionCreate", interaction => {
  if(interaction.isCommand()) interaction.reply({
    content: "red's kinda sus ngl",
    ephemeral: true
  });
  cmdh.handleSlash(interaction);
})
client.login(process.env.TOKEN);