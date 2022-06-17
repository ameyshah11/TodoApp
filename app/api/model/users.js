const mongoose = require('mongoose');
const bcryt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password : {
        type:String,
        required: true
    }
})

UserSchema.pre('save',function(next){
    const saltRounds = 15;
    this.password = bcryt.hashSync(this.password,saltRounds);
    next();
})
module.exports = mongoose.model('UserTodo',UserSchema)