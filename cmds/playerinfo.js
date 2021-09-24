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
        if (this.cmd[1] == undefined) return;
        Object.values(this.bot.entities).forEach(async item => {
            if (item.type == "player") {
                if (item.username !== undefined && item.username == this.cmd[1]) {
                    console.log(item)
                }
            }
        })
    }
}
module.exports = {
    "command-data": {

    },
    Slash, Prefix
}