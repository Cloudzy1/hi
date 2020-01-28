const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const figlet = require("figlet")
const clc = require("cli-color");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    console.clear()
    figlet.text(`              ${config.text}`, {
        font: `${config.font}`,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(clc.cyanBright(`${data}`, ""));
        console.log(clc.cyan("                                 Coded by Xaxlii#1337 -- https://discord.gg/zUttQv6 -- "))
        console.log(clc.cyan(`                                 Your prefix is`, clc.redBright(`${config.prefix}`)))
    });     
}

module.exports.config = {
    name: "clearconsole",
    description: "says hello",
    usage: "+clearconsole",
    accessableby: "Members",
    aliases: ["dm", "dma"]
}