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
        this.config = api.getConfig();
        this.execute();
    }
    execute() {
        if (this.cmd[1] == undefined) return;
        if (this.config.get("banned").includes(this.cmd[1])) return;
        newbanned = this.config.get("banned");
        newbanned.push(this.cmd[1]);
        this.config.set("banned", newbanned);
    }
}
module.exports = {
    "command-data": {

    },
    Slash, Prefix
}