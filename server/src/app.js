import 'dotenv/config';
import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import { connect } from "./utils/DB.Connection";

import morgan from "morgan";
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || "8088";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


//Book Managements
//variable declaration and import model file
const bookRouter = require("./api/routes/bookRoutes.js");
app.use("/books", bookRouter);


app.listen(PORT, () => {
    logger.info(`Server is up and running on PORT ${PORT}`);
    connect();
});

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}