const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    description: 'Send\'s help command',
    execute(message, args) {
        const commands = message.client.commands;

        const helpEmbed = new MessageEmbed()
            .setAuthor("Command List")
            .setColor("#ff0000");

        commands.forEach(command => {
            helpEmbed.addField(command.name, command.description);
        });

        message.channel.send(helpEmbed);
    },
};
