const Discord = require("discord.js")
const config = require("../config.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    let target = message.mentions.members.first() || message.guild.members.get(args[0])
    let embed = new Discord.RichEmbed()
    .addField(`IP:`, "127.001")
    .addField(`Email:`, `${target}@gmail.com`)
    .addField("Password", `goodpass123`)
    .setFooter(`${message.author} hacked ${message.mentions.members.first()}`)
    message.channel.send(embed)
}


module.exports.config = {
    name: "hack",
    description: "Displays the bots current uptime!",
    usage: "!hack",
    accessableby: "Members",
    aliases: ["ut"]
}