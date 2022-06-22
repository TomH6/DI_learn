const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const tasks_routes = require('./routes/tasks.js');
const users_routes = require('./routes/users.js');

const nodeCron = require('node-cron');
const cors = require('cors');


const cookieParser = require('cookie-parser');
const db = require('./config/Database.js');

const { deleteScore } = require('./my_modules/db-users.js');
const { clearIsComplete, clearWeeklyScore} = require('./my_modules/db-tasks.js');

dotenv.config();
const app = express();

app.use(cors({credentials:true,origin:'https://washytom.herokuapp.com'}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const authenticateIt = async() => {
    try {
      await db.authenticate();
      console.log('database connected');
    } catch (e) {
      console.log(e);
    }
}
authenticateIt()

app.listen(process.env.PORT||3333, ()=>{
    console.log(`listening on port ${process.env.PORT||3333}`)
});

app.use('/api/users', users_routes);
app.use('/api/tasks', tasks_routes);


//** CRON JOBS **//
const deleteScoreCron = async() => {
    const data = await deleteScore()
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
 

const everyMidnight = nodeCron.schedule("59 23 * * *", deleteScoreCron);// working - clear score
const everyMidnightTwo = nodeCron.schedule("59 23 * * *", clearIsCompleteCron);// working - clear iscomplete userss_progress

const everySaturdayMidnight = nodeCron.schedule("59 23 * * 6", clearWeeklyScoreCron);// working - clear weekly score

app.use('/',express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});