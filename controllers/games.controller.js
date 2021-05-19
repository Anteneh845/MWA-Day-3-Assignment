let {getDBConnection} = require("../config/database-config");

module.exports.listGames = (req, res) => {
    let [offset, count] = [0, 3];
    let dbConnection = getDBConnection();
    let collection = dbConnection.collection("games");
    if (req.query.offset && req.query.count) {
        [offset, count] = [parseInt(req.query.offset), parseInt(req.query.count)];
        count = count > 7 ? 7 : count;
    }
    collection.find().skip(offset).limit(count).toArray((err, games) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        res.status(200).send(games);
    });
}