const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const DB = require('./modules/db.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


dotenv.config();

app.get('/test', (req,res)=>{
  res.send('hi there')
})

app.listen(process.env.PORT||5000,()=>{
  console.log(`listening on port ${process.env.PORT||5000}`);
})

app.post('/insert', (req,res)=>{
  console.log('reqBodyText',req.body.text);
  DB.insertText(req.body.text)
  .then(retdata => {
    res.json(retdata)
    // console.log(retdata[0].id);
  })
  .catch(e=>{
    console.log(e);
    res.json({message:e.message})
  })
});

app.post('delete', (req, res)=>{
  console.log('reqBodyID',req.body.id);
  DB.deleteRow(req.body.id)
  .then(retdata =>{
    res.json(retdata)
    console.log(retdata);
  })
  .catch(e =>{
    console.log(e);
    res.json({message:e.message})
  })
})
