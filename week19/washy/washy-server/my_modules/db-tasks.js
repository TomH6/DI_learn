const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex({
    client: 'pg',
    connection:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});

//** GET ALL TASKS & CREDIT POINTS **/
const getAllTasks = () => {
    return db('tasks')
    .select('id', 'task', 'pointsworth', 'verb', 'img', 'iscomplete')
    .orderBy('pointsworth')
};

//** Get A Single Task */
const getTask = (task_id) => {
    return db('tasks')
    .select('id', 'task', 'pointsworth', 'verb')
    .where({id: task_id})
};

//** Search Task */
const searchTask = (query) => {
    return db('tasks')
    .select('id', 'task', 'pointsworth', 'verb')
    .whereILike('task', `${query}%`)
};

//** INSERT NEW TASK */
const insertNewTask = (newUserTask) => {
    return db('tasks')
    .insert(newUserTask)
    .returning('*')
};

//** REMOVE TASK */
const deleteTask = (id) =>{
    return db('tasks')
    .del()
    .where({id:id})
    .returning('*')
};

//** UPDATE TASK */
const updateTask = (id, task) => {
    return db('tasks')
    .update(task)
    .where({id:id})
    .returning('*')
};

//** GET A SINGLE TASK'S OBJECTIVES **/
const getTaskObjectives = (task_id) => {
    return db('task_objectives')
    .select('id', 'objective', 'url', 'task_id')
    .where({task_id: task_id})
};

//** GET ALL TASKS & CREDIT POINTS **/
const getAllTaskObjectives = () => {
    return db('task_objectives')
    .select('id', 'objective', 'url', 'task_id')
    .orderBy('task_id')
};

//** CLEAR IS COMPLETE */
const clearIsComplete = () =>{
    return db('tasks')
    .update({iscomplete:false})
    .returning('*')
};

//** FILL IS COMPLETE */
const fillIsComplete = () =>{
    return db('tasks')
    .update({iscomplete:true})
    .returning('*')
};

//** CLEAR WEEKLY SCORE */
const clearWeeklyScore = () =>{
    return db('weekly_score')
    .update({combined_score:0})
    .returning('*')
};

module.exports = {
    getAllTasks,
    getTask,
    searchTask,
    insertNewTask,
    deleteTask,
    updateTask,
    getTaskObjectives,
    getAllTaskObjectives,
    clearIsComplete,
    fillIsComplete,
    clearWeeklyScore
}