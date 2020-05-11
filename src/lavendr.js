const { version, name }             = require('../package.json');
const opts                          = require('./json/config.json');
const dotenv                        = require('dotenv');
const date                          = require('strftime');
const fs                            = require('fs');
const Discord                       = require('discord.js');
const client                        = new Discord.Client({partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER']})
// ----------------------------------------------------------------------
const timenow = date.timezone('+0200')
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
// ---------------------------I N I T------------------------------------
client.once('ready', () => {
    console.log(`
${name} versión ${version} conectado correctamente.
Veo ${client.users.cache.size} usuarios, ${client.channels.cache.size} canales y estoy en ${client.guilds.cache.size} servidor/es.
Esperando instrucciones...
..........................
..........................
..........................`)
});
// ----------------------------------------------------------------------
// --------------C O M M A N D - C  O L L E C T I O N---------------------
client.commands = new Discord.Collection();
            for (const file of commandFiles) {
                const command = require(`./commands/${file}`)
                client.commands.set(command.name, command)
                }
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------        
    const embed = new Discord.MessageEmbed();
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
client.on('message', async (message) => {
    await console.log(message.content)

    if (message.content.startsWith(`${opts.prefix}test`)) 
        {
            message.channel.send("test response");
        }       
})
// ----------------------------------------------------------------------
dotenv.config();
client.login(process.env.TOKEN);