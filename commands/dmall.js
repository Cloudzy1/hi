const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return;

    try{
        message.guild.members.forEach(member => {
            if (member.id != bot.user.id && !member.user.bot) member.send(args.join(" "));
        });
    } catch (error)
    {
        console.log(error);
    }
}


module.exports.config = {
    name: "dmall",
    description: "Clearing messages",
    usage: "dmall",
    accessableby: "Chat Mods",
    aliases: ["dm", "dma"]
}