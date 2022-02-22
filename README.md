# This is a Template for a Discord bot
## General Information
<p>You can change everything as you want.</p>
<p>You can use this template to create your own bot.</p>

## Adding a command
<p>If you want to add a command, just create a file in the commands folder ending in <b>.command.js</b>. It should be automatically added once you restart the bot</p>
<p>The following syntax for creating a command:</p>
```
const Command = require('./Command.js');
const commandVariableName = new Command(
    "CommandName",
    "Description",
    "Usage",
    ["aliases", "otherAliases", ...],
    "category",
    true, // This describes whether the  command is enabled
    false, // This describes whether the command is only for the owner of the server
    false, // This describes whether the command is only for the owner of the bot
    false, //these are the arguments for the command, leave them on false for now, they are being set by the command itself while it is being executed
    function (msg) {
        //This is the function that is executed when the command is executed
        msg.channel.send("This is the message that is sent when the command is executed");
    }
);

exports.command = commandVariableName; //make sure to export the command variable as "command" so leave the statement as it is
```

## Requirements
<p>You need to have a Discord bot account.</p>
<p>You need to have a Discord bot token.</p>
<p>You need to have a Node.js version of at least 16.0.</p>

## Installation
<p>You can set the bot up with the following command:</p>
<p><code>npm install</code></p>

## Usage
<p>You can use the bot with the following command:</p>
<p><code>node bot.js</code> or if you want to keep it short <code>node .</code></p>
