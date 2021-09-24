const config = require("./config.js");
const permfile = require("./permissions.json");
function matches(usr, action, category) {
    if(config.get("permissions")[usr] == undefined) {
        if((permfile[category][action] !== undefined && permfile[category][action] <= config.get("permissionsAll")) || usr == config.get("botOwner")) {
            return true;
        } else {
            return false;
        }
    } else {
    if((permfile[category][action] !== undefined && permfile[category][action] <= config.get("permissions")[usr]) || usr == config.get("botOwner")) {
            return true;
        } else {
            return false;
        }
    }
}
function set(usr, val) {
    newperms = config.get("permissions")
    try{newperms[usr] = parseInt(val);}catch(e){return};
    config.set("permissions", newperms);
}
function remove(usr) {
    newperms = config.get("permissions")
    if(newperms[usr] == undefined) return;
    delete newperms[usr];
    config.set("permissions", newperms);
}
function get() {
    return config.get("permissions")
}
module.exports = {
    matches, set, remove, get
}