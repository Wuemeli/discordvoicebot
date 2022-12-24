const constants = require('./constants.js');
const client = constants.client;
const token = constants.token;

/* Imports all commands */
require('./commands/commandsMain.js');
/* Imports all events */
require('./events/eventsMain.js');

/* Announces when bot starts */
client.on('ready', () => {
    console.log("Bot started and operative. Have fun!");

    /* Sets bot's presence */
    client.user.setPresence({
        activity: {
            name: '!help',
            type: 'STREAMING'
        },
        status: 'online',
        timestamp: {
            start: Date.now()
        }
    })

});

/* Log-ins with bot's credentials */
client.login(token);
