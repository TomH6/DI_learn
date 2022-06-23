const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {router} = require('./routes/Users.js');
const db = require('./config/Database.js');

dotenv.config();
const app = express();

const authenticateIt = async() => {
  try {
    await db.authenticate();
    console.log('database connected');
  } catch (e) {
    console.log(e);
  }
}
authenticateIt()


app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router.router);

app.listen(process.env.PORT||8080, ()=> {
  console.log(`Server on port ${process.env.PORT||8080}`);
})
