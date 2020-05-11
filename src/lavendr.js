// ------------------------I M P O R T S---------------------------------
const opts      = require('./json/config.json');
const dotenv    = require('dotenv');
const date      = require('strftime');
const fs        = require('fs');
const Discord   = require('discord.js');
const client    = new Discord.Client({partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER']});
// ----------------------------------------------------------------------
// ------------------D A T E - A N D - D I R S---------------------------
const timeNow = date.timezone('+0200');
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
// ----------------------------------------------------------------------
// ---------------------------I N I T------------------------------------
client.once('ready', async () => {
    const { version, name }             = require('../package.json');
        console.log(`
            \n${name} versión ${version} conectado correctamente.
            \nVeo ${client.users.cache.size} usuarios, ${client.channels.cache.size} canales y estoy en ${client.guilds.cache.size} servidor/es.
            \nEsperando instrucciones...
            \n..................................................................\n`)
    client.user.setActivity(version, {type : 'PLAYING'});
    });
// ----------------------------------------------------------------------
// --------------C O M M A N D S - C O L L E C T I O N-------------------
client.commands = new Discord.Collection();
            for (const file of commandFiles) {
                const command = require(`./commands/${file}`)
                client.commands.set(command.name, command)
                };
// ----------------------------------------------------------------------
// ---------------C O M M A N D S - L I S T E N E R ---------------------
client.on('message', async (message) => {
    const chatLog = 
        (timeNow('%F %T', new Date()) + '  #' + message.channel.name + ' >> ' 
        + message.author.username + ': ' + message.cleanContent);
    console.log(chatLog);

    const args = message.content.slice(opts.opts.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
        if (!client.commands.has(comando)) return;
        if (message.author.bot) return;
    const command = client.commands.get(comando);
        try {
            command.execute(message, args);
        }
        catch(error) {
            console.error(`${Date()} >> ${error}`);
            message.channel.send(new Discord.MessageEmbed()
                .setColor(opts.opts.colors.rojo)
                .setDescription(' hubo un error grave. Favor de revisar la consola.'))
                .then(msg => msg.delete({timeout: 1000 * 20}));
        }
});
// ---------------------R E / D I S C O N N E C T------------------------
client.once('reconnecting', () => {
    console.log('Reconectando...')
});
client.once('disconnect', () => {
    console.log('Desconectando...')
});
// ----------------------------------------------------------------------
dotenv.config();
client.login(process.env.TOKEN);


