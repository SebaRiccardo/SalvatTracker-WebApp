const mongoose = require('mongoose');
const config = require("../config/index")

const dbconnect = function() {
    //todo: seguir
    mongoose.connect(config.database_connection_url).then(() => {
        console.info("Connected to Mongo DB Atlas : | " + config.database_connection_url);

    }).catch((err) => console.error(`DB is not ready, err:${err}`));
}

module.exports = dbconnect
