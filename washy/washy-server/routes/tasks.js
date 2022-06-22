const express = require('express');
const tasks_routes = express.Router();

const {
    _getAllTasks, 
    _getTask, 
    _searchTask,
    _insertNewTask,  
    _deleteTask, 
    _updateTask,
    _getTaskObjectives,
    _getAllTaskObjectives

} = require('../controlers/tasks.js');

tasks_routes.get('/objectives/:id', _getTaskObjectives);
tasks_routes.get('/objectives', _getAllTaskObjectives);
tasks_routes.get('/search', _searchTask);
tasks_routes.get('/:id', _getTask);
tasks_routes.get('/all/:id', _getAllTasks);
tasks_routes.post('/', _insertNewTask);
tasks_routes.delete('/:id', _deleteTask);
tasks_routes.post('/:id/:userId',_updateTask);


module.exports = tasks_routes;