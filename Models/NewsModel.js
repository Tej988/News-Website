const mongoose = require('mongoose');

const Note = mongoose.Schema({
   
    id:{
        type:mongoose.SchemaTypes.ObjectId, 
        
    },
    url:{
        type:String,
        required:true,
    },
    heading:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    postdate:{
        type:Date,
        required:true,
    },
   
    
});

module.exports = mongoose.model("notes",Note,"notes");