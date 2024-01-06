module.exports = {
    name: 'ping',
    description: 'Check the bot\'s latency',
    execute(message, args) {
        const latency = message.client.ws.ping;
        message.channel.send(`Pong! Latency is ${latency}ms`);
    },
};
