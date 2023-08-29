const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    name: {
        type:String ,
        require :[true, "project connot be empty"],
		minlength: [3, "Projects must be more than 3 charecters "],
        unique:[true , "Project is exist "]  
    } , 
    date: {
        type:Date , 
        require:[true, "Date is require"]

    },
    
      status: {
          type:String , 
          default:"todo"
      }
    
    
	
}, { timestamps: true });


module.exports.project = mongoose.model('project', projectSchema);


