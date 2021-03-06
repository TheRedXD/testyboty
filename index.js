// @ts-check

const Discord = require("discord.js");
const dotenv = require("dotenv");
let cmdh = require("./cmdh");
dotenv.config();
const config = require("./config.js");
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS]});
const api = require("./libs/mclink/api.js");

api.load();
api.setClient(client);

client.on("ready", () => {
  console.log(client.user.tag +" has logged in!");
});
client.on("message", (msg) => {
  console.log(msg.author.tag+": "+msg.content)
  if (config.get("prefix")[msg.guild.id] == undefined) {
    cmdh.handlePrefix(msg, config.get("defaultPrefix"));
  } else {
    cmdh.handlePrefix(msg, config.get("prefix")[msg.guild.id]);
  }
});
client.on("interactionCreate", interaction => {
  if(interaction.isCommand()) {
    cmdh.handleSlash(interaction); 
  }
})
client.login(process.env.TOKEN);