const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required : [true, "FirstName must be Required"]

    },
    lastName: {
        type: String,
        required : [true, "LastName must be Required"]
    },
    email : {
        type: String , 
        required : [true , "Email must be Required"]
    },
    address :{
        type : String, 
        required : [true, "Address must be added"]
    }
} , {timestamps:true} );
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User