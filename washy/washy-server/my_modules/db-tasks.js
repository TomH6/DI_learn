const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex({
    client:'pg',
    connection:{
      connectionString:process.env.DATABASE_URL,
      ssl:{rejectUnauthorized:false}
    }
});

//** GET ALL TASKS & CREDIT POINTS **/
const getAllTasks = (userId) => {
    console.log('getAll tasks', userId);
    return db.raw(`select id, task, pointsworth, verb, img,
    (select iscomplete from userss_progress where t_id = ts.id and u_id = ${userId}) iscomplete
    FROM tasks ts
    order by pointsworth`)
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
const updateTask = (t_id,u_id, iscomplete) => {
    // console.log('FROM HERE', iscomplete.iscomplete);
    // console.log('FROM HERE', u_id);
    // console.log('FROM HERE', t_id);
    return db('userss_progress')
    
    .insert({u_id:u_id, t_id:t_id, iscomplete:iscomplete.iscomplete})
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
    return db('userss_progress')
    .del()
    .returning('*')
};

//** FILL IS COMPLETE */
const fillIsComplete = () =>{
    return db('users')
    .update({shutdown:true})
    .returning('*')
};

//** CLEAR WEEKLY SCORE */
const clearWeeklyScore = () =>{
    return db('weekly_score')
    .del()
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