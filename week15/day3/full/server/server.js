const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const DB = require('./my_modules/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

dotenv.config();

app.listen(process.env.PORT||8080, ()=>{
    console.log(`listening on port ${process.env.PORT}`)
});

app.get('/test', (req, res)=>{
    res.send('Hello')
})

app.post('/insert',(req, res)=>{
    DB.insertText(req.body.text)
    .then(retdata=> {
        res.json(retdata)
    })
    .catch(e=>{
        res.json({message:e.message})
    })
})