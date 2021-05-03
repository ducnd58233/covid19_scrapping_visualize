const Covid19 = require('../models/Covid19');

module.exports = (req, res) => {
    Covid19.find({})
        .then((docs) => {
            res.send(docs);
        })
        .catch((err) => {
            console.log(`Error in fetch database: ${err}`);
            res.send(err);
        })
}