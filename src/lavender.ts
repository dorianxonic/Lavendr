import { config } from 'dotenv'
    config();
import { Client } from 'discord.js'
    const client: Client = new Client()
    client.login(process.env.TOKEN);




