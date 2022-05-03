//import and assign
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const Schema = mongoose.Schema;

const bookSchema = new Schema({

    Subject: {
        type: String,
        required: [true, 'Book Subject is required']
    },
    Title: {
        type: String,
        required: true,
    },
    ISBN: {
        type: String,
        required: true
    },
    NameAuth: {
        type: String,
        required: true
    },
    NumOfCopy: {
        type: String,
        required: true
    },

    Category: {
        type: String,
        required: true
    },

    Copyright: {
        type: String,
        required: true
    },

})

autoIncrement.initialize(mongoose.connection);
bookSchema.plugin(autoIncrement.plugin, 'book');

const Book = mongoose.model("Book", bookSchema); //document name(table)

module.exports = Book;