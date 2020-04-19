const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzAwOTY1MDIxMTQzNzkzNzQ1.XpquiA.9YyvHNSUotaF_czkZ0Sh3M9ZolA';

const PREFIX = '!';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{

    let args = message.content.slice(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!');
        break;
    case 'website':
        message.channel.send('Availble In A Future Version Of The Bot')
        break;
    case 'info':
        if(args[1] === 'version'){
            message.channel.send('Version ' + version)
        }else{
           message.channel.send('Invaild Args') 
        }
        break;
    case 'help':
        message.channel.send('Hello This is Bera. a bot Made for Fun and soon for Moderation! this bot was made at 18/4/2020. To invite me into your server please use that link: https://top.gg/bot/700965021143793745')
        break;
  }
})

bot.login(process.env.token);

