import mongoose from "mongoose";
import config from "../configs";
import logger from "../utils/logger";

let database;

const connect = async() => {

    //database connection
    const URL = config.DB_Connection_String;

    if (database) return;

    //mongo db configaration
    mongoose.connect(URL)
        .then((connection) => {
            database = connection;
            logger.info("Mongodb Connection Success !");
        })
        .catch((err) => {
            logger.error(err.message);
        })

}

export { connect };