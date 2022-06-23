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


//** GE ALL USERS */
const getAllUsers = () => {
    return db('users')
    .select('id', 'username', 'password', 'score')
    .orderBy('id')
};

//** Get A Single USER */
const getUser = (user_id) => {
    return db('users')
    .select('id', 'username', 'score')
    .where({id: user_id})
};

//** UPDATE USER-INFO */
// const updateUserInfo = (id, newscore) => {
//     return db('users')
//     .update({score:newscore})
//     .where({id:id})
//     .returning('*')
// };

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

module.exports = {
    getAllUsers,
    getUser,
    updateUserInfo,
    insertNewUser,
    getUserCombinedScore,
    updateUserWeekly,
    deleteScore
}