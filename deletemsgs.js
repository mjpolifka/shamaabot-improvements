require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();


const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", msg => {
    if (msg.content.toLowerCase().startsWith("!clearchat")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 99});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
});

