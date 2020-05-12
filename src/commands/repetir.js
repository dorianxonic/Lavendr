const opts      = require('../json/config.json');
const Discord   = require('discord.js');
const embed = new Discord.MessageEmbed();
module.exports = {
    name: 'repetir',
    description: 'Repite el mensaje en nombre del bot',
    async execute(message, args) {
        message.delete({timeout: 10}).catch(err => console.log(err));
        const mensajeRep = args.join(' ');
        
        if (message.member.hasPermission(['MANAGE_MESSAGES'])) {
            if (!mensajeRep) return;
            else {
                message.channel.send(embed
                    .setColor(opts.opts.colors.azul)
                    .setTitle(mensajeRep))
                    .catch(err => console.log(err));
            }
        
        } else {
            message.channel.send(`No tienes permiso para este comando, ${message.member}`)
            .then(msg => msg.delete({timeout: 1000 * 5})
            .catch(err => console.log(err)));
        }
    }
}