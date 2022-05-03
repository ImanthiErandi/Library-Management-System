//import and assign
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const Schema = mongoose.Schema;

const authorSchema = new Schema({

    NameAuth: {
        type: String,
        required: [true, 'Author Name is required']
    },
    NumOfCopy: {
        type: String,
        required: [true, 'Number of copies is required']
    },
    Category: {
        type: String,
        required: [true, 'Book category is required']
    },
    NumOfPages: {
        type: String,
        required: [true, 'Number of pages is required']
    },
    Title: {
        type: String,
        required: [true, 'Book Title is required']
    },
    PublicationYear: {
        type: String,
        required: [true, 'publication year is required']
    },
    Edition: {
        type: String,
        required: [true, 'Book Edition is required']
    },
    PublisherName: {
        type: String,
        required: [true, 'Publisher Name is required']
    },

})

autoIncrement.initialize(mongoose.connection);
authorSchema.plugin(autoIncrement.plugin, 'author');

const Author = mongoose.model("Author", authorSchema); //document name(table)

module.exports = Author;