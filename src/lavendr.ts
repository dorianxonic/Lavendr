// import { version, name, author } from '../package.json' //Unable to import from outside source folder
import { opt } from './json/config.json'
import { config } from 'dotenv'
    config();
import { Client, Message } from 'discord.js'
    const client: Client = new Client()
    client.login(process.env.TOKEN);

    client.on('ready', async () => {
        await console.log(`\n...Conectado correctamente...`)

    })

    client.on('message', async (message: Message) => {
        await console.log(message.content)

        if (message.content.startsWith(`${opt.prefix}test`)) 
            {
                message.channel.send("test response");
            }
        
    })


