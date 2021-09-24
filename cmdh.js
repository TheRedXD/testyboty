// @ts-check

/* 
    Maximum Command Handler v69
    Written by TheBlueBurger and TheRedXD
    Mostly burger
    **AMOGUS**
*/
/**
 * @description Command Handler
 * @todo Finish this
 */
const perms = require("./permissions.js");

module.exports = new class Handler {
    constructor(client) {
        this.client = client;
        this.cmds = [];
        this.init();
    }
    init() {
        let _cmds = require("fs").readdirSync("cmds/");
        let cmds = _cmds.map(filename => {
            let content = require("./cmds/" + filename);
            let requiredStuff = ["command-data", "Slash", "Prefix"];
            requiredStuff.forEach(requiredThing => {
                if(!content[requiredThing]) throw new Error(filename + " is missing the required arg: " + requiredThing);
            });
            console.log("Loaded " + filename);
            return {
                ...content,
                filename
            }
        })
        this.cmds = cmds;
        console.log("Loaded " + cmds.length + " commands")
    }
    handleSlash(interaction) {
        console.dir(interaction);
    }
    /**
     * @todo Finish this stupid thing
     * @description handleSlash but way faster to deploy
     */
    handlePrefix(msg, prefix) {
        if(!msg.content.startsWith(prefix)) return;
        let cmd = msg.content.split(" ");
        cmd[0] = cmd[0].substr(prefix.length, cmd[0].length);
        if(!this.cmds.map(i => i.filename).includes(cmd[0]+".js")) {msg.reply("Sorry, but this command does not exist!"); return;};
        if(!perms.matches(msg.author.id, cmd[0], "commands")) {msg.reply("Sorry, but you have no permissions to run this command!"); return};
        this.cmds.forEach(item => {
            if(item.filename == cmd[0]+".js") {
                new item.Prefix(msg, cmd, this.client)
            }
        });
    }
}