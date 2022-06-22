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


//** GE ALL USERS */
const getAllUsers = () => {
    return db('users')
    .select('id', 'username', 'password', 'score')
    .orderBy('id')
};

//** Get A Single USER */
const getUser = (user_id) => {
    return db('users')
    .select('id', 'username', 'score', 'shutdown')
    .where({id: user_id})
};

//** UPDATE USER-INFO BACK-UP */
const updateUserInfo = (id, userInfo) => {
    return db('users')
    .update(userInfo)
    .where({id:id})
    .returning('*')
};

//** INSERT USER DATA */
const insertNewUser = (newUserInfo) => {
    return db('users')
    .insert(newUserInfo)
    .returning('*')
};

//** Get Single USER COMBINED SCORE */
const getUserCombinedScore = (user_id) => {
    return db('weekly_score')
    .select('user_id', 'username', 'combined_score')
    .where({user_id: user_id})
};

//** UPDATE USER-WEEKLY SCORE */
const updateUserWeekly = (id, userInfo) => {
    return db('weekly_score')
    .update(userInfo)
    .where({user_id:id})
    .returning('*')
};

//** CLEAR DAILY SCORE */
const deleteScore = () =>{
    return db('users')
    .update({score:0})
    .returning('*')
};

const getWeeklyScore = (userId) => {
    return db('weekly_score')
    .select('u_id', 'u_score')
    .where({u_id: userId})
};

const sendWeeklyScore = (userId,score) => {
    return db('weekly_score')
    .insert({u_id:userId, u_score:score})
    .returning('*')
};
const updateWeeklyScore = (userId,score) => {
    return db.raw(
        `update weekly_score set u_score = u_score + ${score}
        where u_id = ${userId}`)
};

module.exports = {
    getAllUsers,
    getUser,
    updateUserInfo,
    insertNewUser,
    getUserCombinedScore,
    updateUserWeekly,
    deleteScore,
    getWeeklyScore,
    sendWeeklyScore,
    updateWeeklyScore
}