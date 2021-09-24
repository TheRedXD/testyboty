let bot;
let config = require("../../config.js");
let perms = require("../../permissions.js");
let launchedBot = require("./bot/index.js");
function setBot(e) {
    bot = e;
};

function getBot() {
    return bot;
};

function getPermsAPI() {
    return perms;
};

function getConfig() {
    return config;
};
function load() {
    launchedBot.load();
}

module.exports = {
    setBot, getBot, getPermsAPI, getConfig, load
}