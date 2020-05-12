const dotenv    = require('dotenv');
const opts      = require('../json/config.json');
const Discord   = require('discord.js');
dotenv.config()

module.exports = {
    name: 'join',
    description: 'Comando para admitir haber leído y aceptado las normas.',
    async execute(message) {
        if (message.channel.id !== process.env.CHAN) {
            await message.delete({timeout: 10}).catch(err => console.log(err));
            await message.member.send('Ya has declarado aceptar las normas una vez.').catch(err => console.log(err));
        } else {
            message.delete({timeout: 10}).catch(err => console.log(err));
            await message.member.roles.add(process.env.ROLE).catch(err => console.log(err));
            await message.channel.send(`${message.member} ha aceptado las normas.`).catch(err => console.log(err));
            await message.member.send(`\nGracias por aceptar las normas. Bienvenido/a a la comunidad, ${message.member}.`).catch(err => console.log(err));
        }
    }
}