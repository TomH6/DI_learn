const express = require('express');
const dotenv = require('dotenv');
const tasks_routes = require('./routes/tasks.js');
const users_routes = require('./routes/users.js');
const nodeCron =  require ("node-cron");
const cors = require('cors');
const { deleteScore } = require('./my_modules/db-users.js');
const { clearIsComplete, fillIsComplete, clearWeeklyScore} = require('./my_modules/db-tasks.js');
// const {  } = require('./my_modules/db-tasks.js');
// const {  } = require('./my_modules/db-tasks.js');
dotenv.config();

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT||3333, ()=>{
    console.log(`listening on port ${process.env.PORT||3333}`)
});

app.use('/api/users', users_routes);
app.use('/api/tasks', tasks_routes);

const deleteScoreCron = async() => {
    const data = await deleteScore()
    console.log(data);
};

const fillIsCompleteCron = async() => {
    const data = await fillIsComplete()
    console.log(data);
};

const clearIsCompleteCron = async() => {
    const data = await clearIsComplete()
    console.log(data);
}; 

const clearWeeklyScoreCron = async() => {
    const data = await clearWeeklyScore()
    console.log(data);
}; 
 
const everyNinePm = nodeCron.schedule("46 15 * * *", fillIsCompleteCron);

const everyMidnight = nodeCron.schedule("59 23 * * *", deleteScoreCron);
const everyMidnightTwo = nodeCron.schedule("59 23 * * *", clearIsCompleteCron);

const everySaturdayMidnight = nodeCron.schedule("59 23 * * 6", clearWeeklyScoreCron);
// console.log('Congragulate User!');