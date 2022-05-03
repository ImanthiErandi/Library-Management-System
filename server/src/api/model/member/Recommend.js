const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recommendSchema = new Schema({
    
    authorName:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    subject :{
        type:String,
        required:true
    },

    publications:{
        type:String,
        required:true
    },


	pYear :{
        type:String,
        required:true
    },
	

    edition :{
        type:String,
        required:true
   
    },

    requestDate :{
        type:String,
        required:true
   
    }

})

const Recommend = mongoose.model("Recommend",recommendSchema);
module.exports = Recommend;
