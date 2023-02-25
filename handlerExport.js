module.exports = (client) => {
    require('./src/handlers/eventsHandler')(client);
    require('./src/handlers/selectedMenuHandler')(client);
    require('./src/handlers/commandsHandler')(client);
    require('./src/handlers/buttonsHandler')(client);
    require('./src/handlers/modalsHandler')(client);
};
