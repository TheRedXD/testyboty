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
            let requiredStuff = ["command-data", "execute"];
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
     * @description handleSlash but worse (prefix based instead of slash based)
     */
    handlePrefix(msg, prefix) {

    }
}