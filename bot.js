const { getCommands, registerCommands, resoveCommand } = require('./commands/commandHandler.js');
const Discord = require('discord.js');
const fs = require('fs');

let prefix = null;

let trustedGuilds = [
    "guildID here"
    // you can add more guilds here
];

try {
    const config = JSON.parse(fs.readFileSync("config.json", "utf8"));
    const token = config.token;
    prefix = config.prefix;

    var client = new Discord.Client({
        intents: [
            Discord.Intents.FLAGS.DIRECT_MESSAGES,
            Discord.Intents.FLAGS.GUILDS,
            Discord.Intents.FLAGS.GUILD_MESSAGES,
            Discord.Intents.FLAGS.GUILD_MEMBERS,
            Discord.Intents.FLAGS.GUILD_BANS
        ]
    });

    client.on("ready", () => {
        console.log(`Logged in as ${client.user.username}...`);
        registerCommands();
    });

    client.on("messageCreate", async (msg) => {
        var content = msg.content,
            channel = msg.channel,
            member = msg.member,
            guild = msg.guild;
        const args = msg.content.trim().split(/ +/g);

        if (content.startsWith(prefix)) {
            var command = resoveCommand(content.substring(prefix.length));
            if (command) {
                if (!command.enabled) return msg.reply("This command does not exist!");
                if (command.ownerOnly && !member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) {
                    return msg.reply("This command is only available for Owners!");
                }
                if (command.guildOnly) {
                    trustedGuilds.forEach(guildID => {
                        if (guild.id != guildID) return msg.reply("This command is only available for trusted guilds!");
                    });
                }
                console.log(`${member.user.username} has executed the command ${command.name}.`);
                command.execute(msg);
            } else {
                msg.reply("This command does not exist!");
            }
        }
    });

    client.on("guildMemberAdd", (member) => {
        member.send(`Welcome to the Server ${member.guild.name}!`);
    });

    try {
        client.login(token);
    } catch(err) {
        console.error("Could not login to Discord: " + err);
    }
} catch (e) {
    console.error(e);
}

module.exports = client;
module.exports.prefix = prefix;