const express = require('express');
var bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
let s = require('./send_list');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.json());
const port = 5050;
app.listen(port, () => console.log(`app listening on port ${port}`));

app.use('/', express.static(__dirname +'/public'));
let shoppingList = [];


app.post('/api',(req, res) => { 
  console.log(req.body);
  shoppingList.push(req.body);
  fs.writeFile('shopping_list.txt',JSON.stringify(shoppingList),e=>{
    if(e){
      res.json({msg:'bad'});
    } else {
      // res.json({msg:req.body})
      res.send(`
      <h1>My Shopping List:</h1>
      <h2>${req.body.item}: ${req.body.amount}</h2>`)
    }
  })
});
