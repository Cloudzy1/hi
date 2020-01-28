const Discord = require("discord.js");
const config = require("../config.json");
const user = require("./check/user.json");
const figlet = require("figlet");
const clc = require("cli-color");
const setTitle = require("node-bash-title");


module.exports = bot => {
     console.clear()
     if(user.password === config.password)
     {

     } else {
         console.log(clc.red("Error: Incorrect login details provided"))
         setTimeout(() => {
            process.exit()
         }, 5000)
     }
     if(user.username === config.username)
     {
        console.log(clc.green("Connecting to discord's servers..."))
        setTimeout(() => {
            console.clear();
            console.log(clc.greenBright("Connected"))
         }, 2000)
        setTimeout(() => {
             console.clear()
                    console.log(clc.green("Logging in..."))
                    setTimeout(() => {
                        console.clear();
                        console.log(clc.greenBright("logged in"))
                     }, 2000)
        setTimeout(() => {
        console.clear()
                 console.log(clc.green("Starting up..."))
        setTimeout(() => {
        console.clear()
        setTitle("Cloud Selfbot | Coded by Xaxlii#1337")
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
        }, 3000);
        }, 3000);
        }, 3000);
     } else{
        console.log(clc.red("Error: Incorrect login details provieded"))
        setTimeout(() => {
            process.exit()
         }, 5000)
     }
}