const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: './src/database/database.sqlite',
});

require('./models/joinedRecently')(sequelize, DataTypes);
require('./models/commandDelay')(sequelize, DataTypes);
require('./models/vipstatus')(sequelize, DataTypes);
require('./models/msgPartner')(sequelize, DataTypes);
require('./models/partner')(sequelize, DataTypes);
require('./models/partnerBlacklist')(sequelize, DataTypes);

const sync = async () => {
    try {
        await sequelize.sync();
    } catch (e) {
        console.log(e);
    }
};

module.exports = { sync, sequelize, DataTypes };
