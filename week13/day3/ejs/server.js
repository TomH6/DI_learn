const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();
app.use(cors());
app.set('view engine', 'ejs'); // set EJS templates 

app.use(express.static(__dirname+'/public'));

app.get('/home', (req,res)=>{
    res.render('home'); // to render EJS files => res.render('')
});
app.get('/about', (req,res)=>{
    res.render('about'); 
});

app.get('/shop', (req,res)=>{
    const products = [
        {id:1,name:'Iphone',price:800},
        {id:2,name:'I-FON',price:700},
        {id:3,name:'Istone',price:600}
    ]
    res.render('shop', {
        data:products
    }); 
})

// app.listen(process.env.PORT||9091,()=>{
//     console.log(`listening to ${process.env.PORT}`);
// })