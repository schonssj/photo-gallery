var Datastore = require('nedb')
    ,dbName = 'data.db'
    ,db;

if(!db) {
    db = new Datastore({
        filename: dbName, 
        autoload: true 
    });
    console.log('Database ' + dbName + ' ready for use.')
}

module.exports = db;