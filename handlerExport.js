module.exports = (client) => {
    require('./src/handlers/eventsHandler')(client);
    require('./src/handlers/selectedMenuHandler')(client);
    require('./src/handlers/commandsHandler')(client);
    require('./src/handlers/buttons-handlinger')(client);
    /*
    require('./src/handlers/_off/modals-hadlinger')(client); */
};
