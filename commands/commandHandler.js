// import fs
const fs = require('fs');

function registerCommands() {
    fs.readdirSync('./commands/').forEach(file => {
        if (file.endsWith(".command.js")) {
            var command = require(`./${file}`).command;
            registerCommand(command)
            console.log(`Command ${command.getName()} registered`);
        }
    })
}

var commands = [];

function registerCommand(command) {
    commands.push(command);
}

function getCommands() {
    return commands;
}

function resoveCommand (command) {
    var commandName = command.split(' ')[0];
    var commandArgs = command.split(' ').slice(1);
    var command = getCommands().find(c => c.name === commandName || c.aliases.includes(commandName));
    if (command) {
        command.setArgs(commandArgs);
        return command;
    } else {
        return null;
    }
}

module.exports = {
    registerCommands,
    getCommands,
    resoveCommand
}