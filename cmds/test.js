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
        this.execute();
    }
    execute() {
        console.log("got here")
    }
}
module.exports = {
    "command-data": {

    },
    Slash, Prefix
}