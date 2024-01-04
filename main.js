require('dotenv').config(); // Load environment variables from .env file
const Discord = require('discord.js');
const fs = require('fs');
const mongoose= require("mongoose")
const client = new Discord.Client();
const prefix = process.env.PREFIX || '!';
const User = require('./models/user'); // Adjust the path based on your project structure


const md= mongoose.connection;
mongoose.connect(process.env.mongoose,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('error', err => {
    console.log(err);
  });

client.on('ready', () => {
    console.log(`Logged in successfully!\nAs ${client.user.tag}`);
    
    const channelID = process.env.CHANNEL_ID;
    const channel = client.channels.cache.get(channelID);

    if (channel) {
        channel.send('Started the bot successfully!');
    } else {
        console.error('Error: Channel not found!');
    }
});

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if (!command) return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error executing the command!');
    }
});


client.login(process.env.TOKEN);
