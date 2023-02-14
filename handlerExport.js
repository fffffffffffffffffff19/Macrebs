module.exports = (client) => {
    require('./src/handlers/eventsHandler')(client);
    /* require('./src/handlers/_off/selectedMenu-handlinger')(client);
    require('./src/handlers/_off/commands-handlinger')(client);
    require('./src/handlers/_off/buttons-handlinger')(client);
    require('./src/handlers/_off/modals-hadlinger')(client); */
};
