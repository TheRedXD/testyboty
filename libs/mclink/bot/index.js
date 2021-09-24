function load() {
    let mf = require('mineflayer');
    let { Vec3 } = require('vec3');
    let config = require('../../../config.js');
    let { mineflayer: mineflayerViewer } = require("prismarine-viewer")
    let api = require('../api.js');
    let rl = require('readline');
    let bot = mf.createBot({
        username: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: config.get("host").ip,
        version: config.get("host").version,
        auth: config.get("login").method
    });
    let bu = require("blueutilities");
    let pathfinder = require("mineflayer-pathfinder");
    let utf8 = require("utf8")

    bot.loadPlugin(pathfinder.pathfinder);
    function randomize(arr) {
        randomnumber = Math.floor(Math.random() * arr.length);
        console.log(arr.length)
        console.log(randomnumber)
        if (randomnumber - 1 > arr.length) {
            randomnumber = arr.length;
        };
        console.log(randomnumber)
        return arr[randomnumber];
    };

    var thename;
    var thenick;

    bot.on('message', (msg) => {
        if (msg.toString().startsWith("Welcome ") && msg.toString().endsWith(" to the server!")) {
            user = msg.toString().split(" ")[1];
            bot.chat("Hello, " + user + "! Welcome to the server. THIS IS NOT ANARCHY! Action will be taken upon breaking the rules, so please read /rules.");
        }
        if (msg.toString().startsWith("====== WhoIs: ") && msg.toString().endsWith(" ======")) {
            if (msg.toString().split(" ")[2] == config.get("username")) return;
            thename = msg.toString().split(" ")[2];
            thenick = msg.toString().split("\n")[1].split(" ")[2];
        }
        console.log(msg.toAnsi());
        api.getClient().channels.cache.get(config.get("commandsChannel")).send(msg.toString());
    });
    var bonku = 0;

    var interf = rl.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    function interfloop() {
        interf.question("Message: ", (answr) => {
            bot.chat(answr);
            interfloop()
        })
    }
    interfloop();
    var attacked = false;
    var i = 0;
    bot.once('spawn', async () => {
        mineflayerViewer(bot, { port: 3007, firstPerson: true, viewDistance: 16 })
        api.setBot(bot);
        bonku++;
        bot.chat("/freedom-01")
        setInterval(async () => {
            Object.values(bot.entities).forEach(async item => {
                if (item.type == "player") {
                    if (item.username !== undefined && item.username == config.get("followPlayer")) {
                        if (item.position.y > bot.entity.position.y && bot.blockAt(bot.entity.position).name != undefined && bot.blockAt(bot.entity.position).name != "air") {
                            if (item.position.distanceTo(bot.entity.position) > 5) {
                                bot.setControlState("jump", true)
                            }
                        } else {
                            bot.setControlState("jump", false)
                        }
                        if (item.position.distanceTo(bot.entity.position) > 5) {
                            bot.setControlState("forward", true)
                            if (bot.blockAt(bot.entity.position.x, bot.entity.position.y, bot.entity.position.z))
                                if (item.position.distanceTo(bot.entity.position) > 8) {
                                    bot.setControlState("sprint", true)
                                    bot.setControlState("jump", true)
                                } else {
                                    bot.setControlState("sprint", false)
                                    bot.setControlState("jump", false)
                                }
                            if (bot.blockAt(new Vec3(bot.entity.position.x - 1, bot.entity.position.y + 1, bot.entity.position.z)).name == "spruce_trapdoor" || bot.blockAt(new Vec3(bot.entity.position.x - 1, bot.entity.position.y + 2, bot.entity.position.z)).name == "spruce_trapdoor" || bot.blockAt(new Vec3(bot.entity.position.x, bot.entity.position.y + 2, bot.entity.position.z)).name == "spruce_trapdoor") {
                                bot.entity.position.x = bot.entity.position.x - 0.1;
                            } else {
                                bot.setControlState("sneak", false)
                                bot.setControlState("sprint", false)
                            }
                        } else {
                            bot.setControlState("forward", false)
                            bot.setControlState("jump", false)
                        }
                        bot.lookAt(new Vec3(item.position.x, item.position.y + 1, item.position.z))
                        if (item.position.distanceTo(bot.entity.position) <= 5) {
                            bot.setControlState("jump", true);
                            bot.attack(item);
                            bot.setControlState("jump", false);
                            //     if(i == 10) {
                            //         await bu.promiseSleep(750)
                            //         if(attacked == false) {
                            //             bot.attack(item);
                            //             attacked = true;
                            //         }
                            //         bot.setControlState("jump", false);
                            //         await bu.promiseSleep(500)
                            //         attacked = false;
                            //         i = 0;
                            //     } else {
                            //         i++;
                            //     }
                        }
                        // bot.inventory.slots.forEach(e => {
                        //     if (e !== null) {
                        //         bot.lookAt(new Vec3(item.position.x, item.position.y + 1, item.position.z))
                        //         bot.toss(e.type, e.metadata, e.count, (err) => { if (err) console.log(err) });
                        //     };
                        // });
                    }
                }
            })
        }, 100)
        // if (true) {
        //     console.log(bot.inventory.slots)
        //     bot.inventory.slots.forEach(item => {
        //         if (item !== null) {
        //             bot.lookAt(new Vec3(bot.entities.ZurivyKomunista.position.x, bot.entities.ZurivyKomunista.position.y + 1, bot.entities.ZurivyKomunista.position.z))
        //             bot.toss(item.type, item.metadata, item.count, (err) => { if (err) console.log(err) });
        //         };
        //     });
        //     // bot.quit();
        // }
    });
    // bot.on("respawn", () => {
    //     bonku++;
    //     if (bonku >= 3) {
    //         dmsgs = ["why do you kill me", "plz stop", "why would you kill such an innocent duck", "plz nu kil me", "y u kill lol", "ae", "respawnium go brr", "koewpfkopwefklpow why", "wefjkowefkopwekfopkwef why", "wjiefpkfowepfk hwy", "why wouildyou killmed :/", "wepoflopwefl whyy"]
    //         bot.chat(randomize(dmsgs))
    //     };
    // })
};

module.exports = {
    load
};