const UserController = require('../controllers/user.controller');
const ProjectController = require('../controllers/project.controller');

module.exports = app => {

    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/setmessage', UserController.setMessage);
    // app.get('/api/hello', UserController.prinHello);
    // app.get('/api/users/allusers', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneSingleUser);
    app.patch('/api/users/:id', UserController.updateExistingUser);
    app.post('/api/users', UserController.createNewUser);
    app.delete('/api/users/:id', UserController.deleteAnExistingUser);

    // KanbanBord

    app.post('/api/new', ProjectController.createProject);
    app.get('/api/projects/:status',ProjectController.getprojectsBystatus);
    app.get('/api/project/:id', ProjectController.getProject);
    app.put('/api/project/:id', ProjectController.updateProject);
    app.delete('/api/project/delete/:id', ProjectController.deleteProject);
    // 
}