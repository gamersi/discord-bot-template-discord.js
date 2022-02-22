const Discord = require('discord.js');
const Command = require('./Command.js');
const getCommands = require('./commandHandler.js').getCommands;
const colors = require('../utils/color.js');
const prefix = require('../bot.js').prefix;


const command = new Command(
    "help",
    "Shows all commands",
    "help",
    ["h"],
    "user",
    true,
    false,
    false,
    false,
    function (msg) {
        let userCommands = [];
        let userDesc = [];
        let adminCommands = [];
        let adminDesc = [];	
        
        for(let i = 0; i < getCommands().length; i++) {
            if(!getCommands()[i].enabled) return;
            if(getCommands()[i].category != "admin") {
                userCommands.push(prefix + getCommands()[i].name);
                userDesc.push(getCommands()[i].description + " - " + getCommands()[i].usage);
            } else if(getCommands()[i].category == "admin") {
                adminCommands.push(prefix + getCommands()[i].name);
                adminDesc.push(getCommands()[i].description + " - " + getCommands()[i].usage);
            }
        }

        let embed1 = new Discord.MessageEmbed()
            .setColor(colors.weiß)
            .setTitle("**User-Commands:**")
            .addField("**Mitglieder:**", `- ${msg.guild.memberCount} -`)
            .setThumbnail(msg.author.avatarURL)
        for(let i = 0; i < userCommands.length; i++) {
            embed1.addField(userCommands[i], userDesc[i], false);
        }
        msg.channel.send({ embeds: [embed1] })
        if(msg.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) {
            let adminembed = new Discord.MessageEmbed()
                .setColor(colors.weiß)
                .setTitle("**Admin-Commands:**")
                .setThumbnail(msg.author.avatarURL)
            for(let i = 0; i < adminCommands.length; i++) {
                adminembed.addField(adminCommands[i], adminDesc[i], false);
            }
            //send embed and delete it after 5 seconds
            msg.channel.send({ embeds: [adminembed] }).then(msg => {
                setTimeout(() => {
                    msg.delete();
                }, 5000);
            });
        }
    }
);

exports.command = command;