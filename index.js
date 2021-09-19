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
  console.log(msg.author.tag+": "+msg.content)
});
client.application.commands.create({
  name: "amogus",
  description: "makes u amogsed"
});
client.on("interactionCreate", interaction => {
  cmdh.handleSlash(interaction);
})
client.login(process.env.TOKEN);