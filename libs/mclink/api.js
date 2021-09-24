let bot;
let config = require("../../config.js");
let perms = require("../../permissions.js");

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

module.exports = {
    setBot, getBot, getPermsAPI, getConfig
}