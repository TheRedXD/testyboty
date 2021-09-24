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
        let args;
        if (this.msg.content.includes(" ")) {
            args = this.msg.content.split(" ");
            args.shift();
            args = args.join(" ")
        } else {
            args = msg;
        }
        check1 = (args.startsWith("/"))
        check2 = (!this.perms.matches(this.msg.author.id, "sudo_commands_allowed", "commands"));
        if (check1 == true) {
            if (check2 == true) {
                return;
            }
        }
        this.bot.chat("" + args);
    }
}
module.exports = {
    "command-data": {

    },
    Slash, Prefix
}