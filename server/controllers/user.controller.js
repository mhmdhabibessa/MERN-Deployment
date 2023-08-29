const User = require('../models/user.models');
 

module.exports.setMessage = (req,res) => {
    res.json({message : "Hello Enzooooo"})
}


module.exports.findAllUsers = (req, res) => {
    User.find({})
        .then((allDaUsers) => {
            res.json(allDaUsers)
        })
        .catch((err) => {
            err => res.status(400).json(err)
        });
}
 
module.exports.findOneSingleUser = (req, res) => {
    // console.log(req);
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => {
            res.json({ user: oneSingleUser })
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => {
            console.log(newlyCreatedUser);
        })
        .catch(err => res.status(400).json(err))
        }
 
        
module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => {
            res.json({ user: updatedUser })
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });}
