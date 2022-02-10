const mongoose = require('mongoose');
const config = require("../config/index")

module.exports = function() {
    mongoose.connect(config.database_connection_url).then(() => {
        console.info("Connected to Mongo DB Atlas ");

    }).catch((err) => console.error(`DB is not ready, err:${err}`));
}

