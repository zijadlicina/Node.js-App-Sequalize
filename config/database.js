const Sequelize = require('sequelize');
const db = new Sequelize('codegig', 'root', '', {
        dialect : process.env.DIALECT || 'mysql',
        host    : process.env.HOST    || '127.0.0.1',
        storage : './scoutout.sqlite'
});

module.exports = {
    db
}