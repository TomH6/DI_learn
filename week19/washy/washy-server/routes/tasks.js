const express = require('express');
const router = express.Router();

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

router.get('/objectives/:id', _getTaskObjectives);
router.get('/objectives', _getAllTaskObjectives);
router.get('/search', _searchTask);
router.get('/:id', _getTask);
router.get('/', _getAllTasks);
router.post('/', _insertNewTask);
router.delete('/:id', _deleteTask);
router.put('/:id',_updateTask);


module.exports = router;