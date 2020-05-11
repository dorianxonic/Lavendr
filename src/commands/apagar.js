module.exports = {
    name: 'apagar',
    description: 'Mata la instancia del bot',
        async execute(message) {
            message.delete({timeout: 100}).catch(err => console.log(err));
            if (message.member.hasPermission('ADMINISTRATOR')) {
                await message.channel.send('👋🏻');
                process.exit(0);
            }
        else {
            message.channel.send(`No tienes permiso para apagarme, ${message.member.displayName}`).then(message.delete({timeout: 1000 * 5}));
        }
    },
};