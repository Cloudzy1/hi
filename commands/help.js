const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const figlet = require("figlet")
const clc = require("cli-color");


module.exports.run = async (bot, message, args) => {
    if(message.author.id !== `${config.id}`) return
    message.channel.send("Check your console").then(m => m.delete(5000))
    console.log(clc.blueBright(`Hi ${bot.user.username} hope you like your selfbot`))
    console.log(clc.blueBright("pfpstealer: steals the mentioned users pfp"))
    console.log(clc.blueBright("fortnitestats: Checks a players stats"))
    console.log(clc.blueBright("ping: sends the ping of the bot"))
    console.log(clc.blueBright("uptime: show for how long the bot have been running"))
    console.log(clc.blueBright("spamstart: starts a spam"))
    console.log(clc.blueBright("spamstop: stops a spam"))
    console.log(clc.blueBright("setlistening: sets your status to listening x"))
    console.log(clc.blueBright("setplaying: sets your status to playing x"))
    console.log(clc.blueBright("setwatching: sets your status to watching x"))
    console.log(clc.blueBright("setstreaming: sets your status to streaming x"))
    console.log(clc.blueBright("Other commands in 30 seconds"))
    setTimeout(() => {
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
            console.log(clc.cyan("                                 Coded by Xaxlii#1337 -- https://discord.gg/auVNGgg -- "))
            console.log(clc.cyan(`                                 Your prefix is`, clc.redBright(`${config.prefix}`)))
            console.log(clc.blueBright("version: shows the current version"))
            console.log(clc.blueBright("embed: sends an embed with the givin message"))
            console.log(clc.blueBright("userinfo: sends a message with info about your profile"))
            console.log(clc.blueBright("translate: Translates the givin message"))
            console.log(clc.blueBright("poll: Makes a poll"))
            console.log(clc.blueBright("shutdown: turns off the bot"))
            console.log(clc.blueBright("meme: sends a random meme"))
            console.log(clc.blueBright("botinfo: shows some info of the bot"))
            console.log(clc.blueBright("clearconsole: clears the console"))
            console.log(clc.blueBright("dmall: dms every person in the server"))
            setTimeout(() => {
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
                    console.log(clc.cyan("                                 Coded by Xaxlii#1337 -- https://discord.gg/auVNGgg -- "))
                    console.log(clc.cyan(`                                 Your prefix is`, clc.redBright(`${config.prefix}`)))
                });  
            }, 30000);
    }); 
    }, 30000);  
}

module.exports.config = {
    name: "help",
    description: "says hello",
    usage: "+help",
    accessableby: "Members",
    aliases: ["dm", "dma"]
}