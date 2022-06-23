import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes/Users.js';
import db from './config/Database.js';

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log('database connected');
} catch (e) {
  console.log(e);
}

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

app.listen(process.env.PORT||8080, ()=> {
  console.log(`Server on port ${process.env.PORT||8080}`);
})
