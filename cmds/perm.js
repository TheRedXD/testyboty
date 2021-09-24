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
        this.perms = api.getPermsAPI();
        this.execute();
    }
    execute() {
        if (this.cmd[1] == undefined) return;
        try {
            switch (this.cmd[1]) {
                case "+":
                    if (this.cmd[3] == undefined) return;
                    if (this.cmd[4] != undefined) return;
                    this.perms.set(this.cmd[2], this.cmd[3]);
                    this.msg.reply("Perms: **+** <@"+this.cmd[2]+">")
                    break;
                case "-":
                    if (this.cmd[2] == undefined) return;
                    if (this.cmd[3] != undefined) return;
                    this.perms.remove(this.cmd[2]);
                    this.msg.reply("Perms: **-** <@"+this.cmd[2]+">")
                    break;
                case "*":
                    this.msg.reply("Perms: **\***:\n"+this.perms.get())
                    break;
                default:
                    this.msg.reply("Sorry, but args might be incorrect (?)");
                    return;
            }
        } catch (e) {
            console.log(e);
        }
    }
}
module.exports = {
    "command-data": {

    },
    Slash, Prefix
}