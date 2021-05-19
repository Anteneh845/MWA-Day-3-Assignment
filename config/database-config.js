const MongoClient = require("mongodb");
let connection = null;
const DB_NAME = "GamesAssignment";
const DB_URL = `mongodb://localhost:27017/${DB_NAME}`

let connectToDB = () => {
    MongoClient.connect(DB_URL, {useUnifiedTopology: true}, (err, client) => {
        if (err)
            console.log(err);
        connection = client.db(DB_NAME);
    })
}
let getDBConnection = () => connection;

module.exports = {
    connectToDB, getDBConnection
}