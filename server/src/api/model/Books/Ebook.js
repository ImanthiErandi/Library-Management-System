//import and assign
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;


const EbookSchema = new Schema({

    NameAuth: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true,
    },
    PublicationYear: {
        type: String,
        required: true,
    },
    PublishDate: {
        type: String,
        required: true
    },
    Image: {
        type: String,
    },
})


autoIncrement.initialize(mongoose.connection);
EbookSchema.plugin(autoIncrement.plugin, 'Ebook');

const EBook = mongoose.model("EBook", EbookSchema); //document name(table)

module.exports = EBook;


/* NameAuth: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Author'
    },*/