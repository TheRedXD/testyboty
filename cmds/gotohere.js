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
        this.msg.reply("Command currently disabled due to not being able to support discord due to relying on positional data of a player, it will later rely on a discord id to IGN conversion layer which should fix it, but for now this is disabled.")
    }
}
module.exports = {
    "command-data": {

    },
    Slash, Prefix
}