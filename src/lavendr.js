import { version, name } from '../package.json'
import date from 'strftime'
import fs from 'fs'
import { opt } from './json/config.json'
import { config } from 'dotenv'
    config();
import * as Discord from 'discord.js'
    
const client = new Discord.Client({partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER']})
const embed = new Discord.MessageEmbed();
    client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    }

const timenow = date.timezone('+0200')

// ----------------------------------------------------------------------

client.once('ready', async () => {
    await console.log(`
${name} versión ${version} conectado correctamente.
Veo ${client.users.cache.size} usuarios, ${client.channels.cache.size} canales y estoy en ${client.guilds.cache.size} servidor/es.
Esperando instrucciones...
..........................
..........................
..........................`)

})

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

client.on('message', async (message) => {
    await console.log(message.content)

    if (message.content.startsWith(`${opt.prefix}test`)) 
        {
            message.channel.send("test response");
        }
        
})

// ----------------------------------------------------------------------

client.login(process.env.TOKEN);