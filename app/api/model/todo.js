const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    creation_date:{
        type:Date,
        required:true
    }
})

module.exports = mongoose.model('Todo',TodoSchema);