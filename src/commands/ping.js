/*
const opt = require('../json/config.json')
const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Ping',
    async execute(message) {
        message.delete().catch(() => console.error)
        const m = new Discord.MessageEmbed()
        .setColor(opt_1.colors.azulclaro)
        .setDescription('Ping?')
        await message.channel.send(m)
        message.edit(m
            .setTitle('Pong!')
            .setDescription(`
            He tardado \`${m.createdTimestamp - message.createdTimestamp} ms\` en escribir y editar este mensaje. Latencia API aproximadamente \`${Math.round(message.client.ws.ping)} ms\``))
            .catch(err => { console.error(err);})
            .then(msg => msg.delete({timeout: 15000}))
    }
};

*/