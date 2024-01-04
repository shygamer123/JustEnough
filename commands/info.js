const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'info',
    description: 'gives info for supportserver and owner',
    execute(message, args) {
        const helpEmbed = new MessageEmbed()
            .setAuthor("INFORMATION:-")
            .setColor("#ff0000")
            .addField("Bot Owner", "<@840244590870003762>") // Replace with the actual user ID
            .addField("Support server","[Join Here](https://discord.gg/nWQ6ynQDHx)");


        message.channel.send(helpEmbed);
    },
};
