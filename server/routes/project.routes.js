const { project } = require('../models/project.model');




module.exports.createProject = (request, response) => {
    const { name,date,status  } = request.body;
project.create({
        name,date,status
    })
        .then(project => response.json(project))
        .catch(err => response.status(400).json(err));
}


module.exports.getProject =(request,response) => {
  project.findOne({_id:request.params.id}) 
  .then(project =>response.json(project))
  .catch(err => response.json(err))
}



module.exports.getprojectsBystatus = (request, response) => {
  project.find({status:request.params.status}).sort({date:1})
        .then(project => response.json(project))
        .catch(err => response.json(err))
}

module.exports.updateProject = (request, response) => {
  project.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updateuser => response.json(updateuser))
        .catch(err => response.json(err))
}
module.exports.deleteProject = (request, response) => {
  project.deleteOne({_id:request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
