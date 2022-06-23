const {
    getAllTasks, 
    getTask, 
    searchTask,
    insertNewTask,  
    deleteTask, 
    updateTask,
    getTaskObjectives,
    getAllTaskObjectives
} = require('../my_modules/db-tasks.js');

 
// Read - get method - all tasks
const _getAllTasks = (req, res)=>{
    getAllTasks()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};
// Read - get one task with id
const _getTask = (req, res)=>{
    getTask(req.params.id)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};
// Read - search task by name
const _searchTask =(req,res)=>{
    searchTask(req.query.q)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};

// Create - create new task
const _insertNewTask = (req, res) => {
    insertNewTask(req.body)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};


// Delete - delete one task 
const _deleteTask = (req, res)=> {
    deleteTask(req.params.id)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};

//Update - update a task - name, points
const _updateTask = (req,res)=>{
    updateTask(req.params.id, req.body)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};

// Read - get method - one task objectives with id

const _getTaskObjectives = (req, res)=>{
    getTaskObjectives(req.params.id)
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};

// Read - get method - all task objectives
const _getAllTaskObjectives = (req, res)=>{
    getAllTaskObjectives()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        console.log(error);
        res.json({mgs:error.message})
    })
};

module.exports = {
    _getAllTasks,
    _getTask,
    _searchTask,
    _insertNewTask,
    _deleteTask,
    _updateTask,
    _getTaskObjectives,
    _getAllTaskObjectives
  
}