const Discord = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Discord.Client();

const punishments = 
[
    send('fuck you'),
    send('you are a bad person'),
    send('are you **TRYING** to get banned?'),
    send('eat my ass'),
    send('i might mute you cuck'),
]

function send(text)
{
    return async (msg) =>
    {
        msg.channel.send(text);
    }
}

bot.on('message', (msg) =>
{
    if (msg.author.bot)
    {
        return;
    }

    for (const mention of msg.mentions.users.array())
    {
        if (mention.id === '294847443214794753')
        {
            const punishment = punishments[
                Math.floor(Math.random() * punishments.length)
            ];

            punishment(msg);

            return;
        }
    }
});

bot.login(process.env.TOKEN);
