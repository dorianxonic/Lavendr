const opts      = require('../json/config.json');
const Discord   = require('discord.js');
module.exports  = {
    name: 'limpiar',
    description: 'Borra una cantidad determinada de mensajes en el canal en que se ejecuta.',
    async execute(message, args) {
        const channel = message.channel
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            const cantidad = parseInt(args[0], 10);
            if (!cantidad || cantidad < 1 || cantidad >= 100 || isNaN(cantidad)) {
                await message.delete({timeout: 10})
                .catch(err => console.log(err))
                await message.channel.send('Especifica una cantidad entre `1`y `99`')
                .then(msg => msg.delete({timeout: 1000 * 2}))
                .catch(err => console.log(err))
                return;
            }
        const seleccionados = await channel.messages.fetch({ limit: cantidad + 1});
        message.channel.bulkDelete(seleccionados, true)
        .catch(err => console.log(err));
            if (cantidad === 1) {
                await message.channel.send(`He limpiado ${args} mensaje por orden de ${message.member} 🗒`)
                .then(msg => msg.delete({timeout: 1000 * 2}))
                .catch(err => console.log(err));
            }
            else {
                await message.channel.send(`He limpiado ${args} mensajes por orden de ${message.member} 🗒`)
                .then(msg => msg.delete({timeout: 1000 * 2}))
                .catch(err => console.log(err));
            }
        }
        else {
            await message.delete({timeout: 10})
            await message.channel.send(`No tienes permiso para eliminar mensajes, ${message.member}`)
            .catch(err => console.log(err));
        }

    }
}
