// @ts-check

const config = require('./config.json');
const fs = require('fs');

function get(setting) {
    return config[setting];
};

function set(setting, value) {
    config[setting] = value;
    fs.writeFileSync('./config.json', JSON.stringify(config));
};

module.exports = {
    get, set
}