const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    let msg = await message.channel.send("Getting the avatar..");
 
    let mentionedUser = message.mentions.users.first() || message.author;
 
    let embed = new Discord.RichEmbed()
 
      .setImage(mentionedUser.displayAvatarURL)
      .setColor("00ff00")
      .setTitle("Avatar")
      .setFooter("Made by Xaxlii#1337")
      .setDescription(
        "[Avatar URL link](" + mentionedUser.displayAvatarURL + ")"
      );
 
    message.channel.send(embed);
 
    msg.delete();
};

module.exports.config = {
    name: "pfpstealer",
    description: "says hello",
    usage: "*pfpstealer",
    accessableby: "Members",
    aliases: ["ps"]
}