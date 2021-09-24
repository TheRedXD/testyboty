const api = require("../libs/mclink/api.js");

class Slash {
    constructor(interaction) {
        this.interaction = interaction;
        this.execute();
    }
    execute() {
        console.log("got here")
    }
}
class Prefix {
    constructor(msg, cmd, client) {
        this.msg = msg;
        this.cmd = cmd;
        this.client = client;
        this.bot = api.getBot();
        this.execute();
    }
    execute() {
        this.msg.reply("Bot's position is: " + this.bot.entity.position.x + " " + this.bot.entity.position.y + " " + this.bot.entity.position.z)
    }
}
module.exports = {
    "command-data": {

    },
    Slash, Prefix
}