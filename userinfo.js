require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();


const TOKEN = process.env.TOKEN;
const GUILDID = process.env.GUILDID;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}`);
  bot.guilds.forEach(guild => console.info(`connected to ${guild.id} : ${guild.name}`));
  
  const list = bot.guilds.get(GUILDID);
  list.members.forEach(member => console.info(member));
  process.exit();
});




