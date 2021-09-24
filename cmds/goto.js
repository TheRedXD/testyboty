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
        if (this.cmd[3] == undefined) return;
        if (!(typeof parseInt(this.cmd[1]) == "number" && typeof parseInt(this.cmd[2]) == "number" && typeof parseInt(this.cmd[3]) == "number")) return;
        this.bot.chat("/tp " + this.cmd[1] + " " + this.cmd[2] + " " + this.cmd[3])
    }
}
module.exports = {
    "command-data": {

    },
    Slash, Prefix
}