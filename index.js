const Discord = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const config = require("./config.js");
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS]});

client.on("ready", () => {
  console.log(client.user.tag +" has logged in!");
});
client.on("message", (msg) => {
  console.log(msg.author.tag+": "+msg.content)
});
client.login(config.get("token") ?? process.env.TOKEN);