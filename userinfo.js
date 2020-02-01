require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();


const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}`);
  bot.guilds.forEach(guild => console.info(`connected to ${guild.id} : ${guild.name}`));
  
  const list = bot.guilds.get('672541629172678686');
  list.members.forEach(member => console.info(member));
});

bot.on("message", msg => {

/*
    if (msg.content.toLowerCase().startsWith("!clearchat")) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 99});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
*/
});

