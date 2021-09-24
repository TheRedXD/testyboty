let bot;
let client;
let config = require("../../config.js");
let perms = require("../../permissions.js");
let launchedBot = require("./bot/index.js");
function setBot(e) {
    bot = e;
};
function setClient(e) {
    client = e;
}
function getBot() {
    return bot;
};
function getClient() {
    return client;
}
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
    setBot, getBot, getPermsAPI, getConfig, load, setClient, getClient
}